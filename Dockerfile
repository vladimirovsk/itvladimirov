FROM node:16.8.0-alpine
WORKDIR /
#ADD package.json ./
#RUN npm install -g npm@7.24.0
#RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
#RUN npm install
#ADD . .
#RUN npm run build
#RUN npm prune --production