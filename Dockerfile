FROM node:10-alpine

RUN mkdir -p /myapp/node_modules && chown -R node:node /myapp

WORKDIR /myapp/

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "node", "app.js" ]
