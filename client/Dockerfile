FROM node:latest 

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]


FROM nginx:1.23-alpine

COPY default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
ENTRYPOINT [ "nginx","-g","daemon off;" ]


