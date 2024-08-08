FROM nginx:1.23-alpine
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
