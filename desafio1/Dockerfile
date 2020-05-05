FROM node:14.1-alpine
WORKDIR /opt/app
COPY package*.json ./
COPY server.js ./
RUN npm install

CMD [ "node", "server.js" ]
EXPOSE 3000