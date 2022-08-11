FROM node:16.16.0

ENV APP /app
RUN mkdir $APP
WORKDIR $APP

RUN yarn global add create-next-app
COPY package.json .
RUN yarn install

COPY . .

RUN yarn build
