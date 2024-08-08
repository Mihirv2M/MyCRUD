FROM node:latest as app

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]

FROM nginx:1.23-alpine

ENTRYPOINT [ "nginx","-g","daemon off;" ]
