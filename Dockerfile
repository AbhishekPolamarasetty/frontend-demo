FROM nginx:latest
WORKDIR /usr/share/nginx/html
COPY . .
COPY ./nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT ["nginx", "-g", "daemon off;"]