FROM node:12-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g @angular/cli@1.7.0
RUN npm install

COPY . .

EXPOSE 4200

CMD ["ng","serve","--host", "0.0.0.0", "--disable-host-check"]
