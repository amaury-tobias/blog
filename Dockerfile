FROM node:12 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

