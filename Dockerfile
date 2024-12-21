# Base image
FROM node:18-alpine

# Install dependencies
RUN apk add --no-cache \
    libc6-compat \
    python3 \
    make \
    g++

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies including encoding and critters
RUN npm install encoding critters
RUN npm install --legacy-peer-deps

# Copy application code
COPY . .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Build argument for OpenAI API key
ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=$OPENAI_API_KEY

# Create .next directory and set permissions
RUN mkdir -p .next/cache && \
    chmod -R 777 .next

# Build the application
RUN NEXT_TELEMETRY_DISABLED=1 npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
