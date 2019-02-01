FROM node:current-alpine
COPY ./dist /app
RUN npm install http-server -g
CMD http-server /app

