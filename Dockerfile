FROM nginx:alpine
EXPOSE 80
COPY webapp /usr/share/nginx/html
