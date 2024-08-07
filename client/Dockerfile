FROM node:latest as app

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . ./

CMD [ "npm","run build" ]

FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

COPY --from=app  /dist .
EXPOSE 80 

ENTRYPOINT [ "nginx","-g","daemon off;" ]

