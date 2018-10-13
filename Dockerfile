FROM node:10

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

COPY lib /app/lib

ENV PORT 80
EXPOSE 80

CMD npm start
