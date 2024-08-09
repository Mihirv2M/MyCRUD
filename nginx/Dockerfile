FROM nginx:latest
EXPOSE 80
#COPY default.conf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/nginx.conf
CMD [ "nginx", "-g", "daemon off;" ]
