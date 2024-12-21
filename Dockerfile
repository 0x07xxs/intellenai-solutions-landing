# Stage 1: Dependencies
FROM node:18-alpine AS deps

# Install necessary system dependencies
RUN apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++ \
    git \
    curl \
    tar \
    gzip \
    build-base

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Set environment variables for build
ENV NEXT_TELEMETRY_DISABLED=1
ENV npm_config_build_from_source=true
ENV npm_config_target_platform=linux
ENV npm_config_target_arch=x64
ENV npm_config_target_libc=glibc
ENV NEXT_SHARP_PATH="/app/node_modules/sharp"

# Install dependencies with verbose logging
RUN npm install --no-optional --legacy-peer-deps --verbose

# Stage 2: Builder
FROM node:18-alpine AS builder

WORKDIR /app

# Install build dependencies
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    tar \
    gzip \
    build-base \
    libc6-compat

# Set build environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV npm_config_build_from_source=true
ENV npm_config_target_platform=linux
ENV npm_config_target_arch=x64
ENV npm_config_target_libc=glibc
ENV NEXT_SHARP_PATH="/app/node_modules/sharp"

# Create and set permissions for .next directory
RUN mkdir -p /app/.next/cache && \
    chmod -R 777 /app/.next

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# Copy source files
COPY . .

# Debug: Print environment and system info before build
RUN echo "Node version:" && node -v && \
    echo "NPM version:" && npm -v && \
    echo "Python version:" && python3 --version && \
    echo "Directory structure:" && ls -la && \
    echo "Next.js directory:" && ls -la .next || true

# Install SWC binaries explicitly
RUN cd node_modules/@next && \
    npm install @next/swc-linux-x64-gnu @next/swc-linux-x64-musl --no-save

# Build the application with detailed error output
RUN NEXT_TELEMETRY_DISABLED=1 \
    npm run build 2>&1 | tee build.log || (echo "Build failed with error:" && \
    echo "Build log:" && cat build.log && \
    echo "Environment:" && printenv && \
    echo "Directory contents:" && ls -la && \
    echo "Node modules contents:" && ls -la node_modules && \
    echo "Next.js cache:" && ls -la .next/cache && \
    echo "SWC binaries:" && find . -name "*swc*" -ls && \
    exit 1)

# Stage 3: Runner
FROM node:18-alpine AS runner

WORKDIR /app

# Set runtime environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV TZ=UTC
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Add runtime public environment variables
ENV NEXT_PUBLIC_API_URL=https://intellenaisolutions.com
ENV NEXT_PUBLIC_SITE_URL=https://intellenaisolutions.com
ENV NEXT_PUBLIC_APP_ENV=production
ENV NEXT_PUBLIC_APP_NAME="Intellenai Solutions"

# Install production dependencies
RUN apk add --no-cache \
    ca-certificates \
    tzdata \
    curl \
    libc6-compat

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Create and set permissions for .next directory
RUN mkdir -p /app/.next/cache && \
    chown -R nextjs:nodejs /app && \
    chmod -R 755 /app

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/.next/cache ./.next/cache

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/ || exit 1

CMD ["node", "server.js"]

# Deployment Process:
# 1. Stage 1 (deps) installs all dependencies
# 2. Stage 2 (builder) builds the application with environment variables
# 3. Stage 3 (runner) sets up the production environment
# 4. When deployed:
#    - Container starts with non-root user
#    - Application runs on port 3000
#    - Health checks run every 30s
#    - Server handles all static and dynamic routes
#    - Production optimizations are enabled
#    - Environment variables are set for both build and runtime
