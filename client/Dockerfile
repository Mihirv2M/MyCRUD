FROM node:latest 

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

RUN npm run build

RUN rm -rf /dist/assets

COPY . ./

CMD ["npm","start"]


