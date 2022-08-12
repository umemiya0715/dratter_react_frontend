FROM node:16.16.0

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN yarn global add create-next-app
COPY package.json .
RUN yarn install

COPY . .

RUN yarn build
