FROM node:21.2.0-alpine

WORKDIR /app

COPY package.json /package.json
RUN npm install
RUN npm install -g @vue/cli
RUN npm install vue-router@4


CMD ["npm", "run", "serve"]