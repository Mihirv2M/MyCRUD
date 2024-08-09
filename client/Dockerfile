FROM node:latest 

WORKDIR /client

COPY package.json .

COPY package-lock.json .

RUN npm install

RUN npm run build


COPY . ./

RUN rm -rf /client/dist/assets

CMD ["npm","start"]


