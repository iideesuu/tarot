FROM node:22-alpine AS build

WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run check && npm test && npm run build

FROM node:22-alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY docker/server.mjs /server.mjs
EXPOSE 80
HEALTHCHECK --interval=10s --timeout=3s --retries=5 --start-period=5s \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
CMD ["node", "/server.mjs"]
