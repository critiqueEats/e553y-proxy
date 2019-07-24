FROM node:7.6-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY ./proxy /src/app/proxy

COPY ./package.json /src/app/package.json

RUN npm install


EXPOSE 8000

CMD npm start