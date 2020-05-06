FROM node:14.1-alpine

WORKDIR /opt/app

COPY package*.json ./
COPY ./dist ./dist
COPY ./node_modules ./node_modules
COPY ./database.sqlite ./database.sqlite
COPY ./.env ./.env

CMD [ "npm", "run", "start:prod" ]

EXPOSE 3000