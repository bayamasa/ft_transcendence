# https://nodejs.org/ja LTSは18.15
FROM node:18.20-buster-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
