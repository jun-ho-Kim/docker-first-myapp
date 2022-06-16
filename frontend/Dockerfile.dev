FROM node:alpine

WORKDIR /app

COPY package.json ./

RUN npm install -g npm@8.11.0
RUN npm install

COPY ./ ./

CMD [ "npm", "start" ]