# Stage 1: Build
FROM node:lts-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM node:lts-alpine AS serve-stage
WORKDIR /app
RUN npm install -g serve
COPY --from=build-stage /app/dist /app/dist
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
