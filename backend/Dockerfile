# https://nodejs.org/ja LTSは18.15
FROM node:19.9-buster-slim

RUN apt-get update -y && apt-get install -y openssl \
    procps  

WORKDIR /app

COPY package*.json .
COPY prisma .
RUN npx prisma generate

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

COPY ./scripts/entrypoint.sh /app/

ENTRYPOINT [ "bash", "entrypoint.sh" ]
