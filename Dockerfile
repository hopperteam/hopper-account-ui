FROM node:12-alpine AS builder

COPY src /app/src
COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
COPY tsconfig.json /app/tsconfig.json
COPY webpack.config.js /app/webpack.config.js
WORKDIR /app
RUN yarn
RUN yarn build

FROM nginx:alpine AS runner
COPY --from=builder /app/.build /usr/share/nginx/html

