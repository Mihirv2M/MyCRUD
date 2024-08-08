FROM nginx:1.23-alpine
COPY default.conf:/usr/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]
