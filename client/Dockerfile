FROM node:latest as app

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm","start"]

FROM nginx:mihirv21/python1app:3.0

ENTRYPOINT [ "nginx","-g","daemon off;" ]
