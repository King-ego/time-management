FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN apt update

COPY . .

EXPOSE 3100

CMD npm run dev