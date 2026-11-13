
FROM node:22-bookworm-slim

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application source
COPY . .

# Generate Prisma Client inside Docker
RUN npx prisma generate --schema=prisma/schema.prisma

# Build NestJS application
RUN npm run build

# Production port
EXPOSE 3000

# Start production application
CMD ["npm", "run", "start:prod"]
