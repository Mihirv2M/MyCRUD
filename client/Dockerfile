FROM node:latest 

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . ./

RUN npm run build

RUN rm -rf /dist/assets

CMD ["npm","start"]


