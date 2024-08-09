FROM nginx:latest
EXPOSE 80
COPY default.conf /etc/nginx/conf.d/default.conf
WORKDIR /client
COPY . .
CMD [ "nginx", "-g", "daemon off;" ]
