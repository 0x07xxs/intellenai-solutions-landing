FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache \
    libc6-compat \
    curl \
    git \
    python3 \
    make \
    g++ \
    build-base

WORKDIR /app

# Install dependencies with detailed logging
COPY package.json package-lock.json* ./
RUN npm install --no-optional --legacy-peer-deps --verbose

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache \
    curl \
    git \
    python3 \
    make \
    g++ \
    build-base

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production
ENV NEXT_PUBLIC_API_URL=https://intellenaisolutions.com

# Debug information
RUN echo "Node version:" && node -v
RUN echo "NPM version:" && npm -v
RUN echo "Directory contents:" && ls -la
RUN echo "Package.json contents:" && cat package.json

# Build application with detailed error output
RUN npm run build --verbose || (echo "Build failed with error:" && \
    echo "Node modules contents:" && ls -la node_modules && \
    echo "Current directory contents:" && ls -la && \
    echo "Next config:" && cat next.config.js && \
    echo "Build logs:" && cat /app/.next/error.log || true && \
    exit 1)

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

# Install production dependencies
RUN apk add --no-cache \
    curl \
    ca-certificates \
    tzdata

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV TZ=UTC

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set directory permissions
RUN mkdir -p /app/.next/cache && \
    chown -R nextjs:nodejs /app

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set runtime environment variables
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

# Start the application
CMD ["node", "server.js"] 