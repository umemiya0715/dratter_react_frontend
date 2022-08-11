FROM ruby:3.1.2

RUN rm -rf /var/lib/apt/lists/*
RUN apt-get update -qq && \
    apt-get install -y build-essential \
                       vim

RUN mkdir /app
WORKDIR /app

ADD ./Gemfile /app/Gemfile 
ADD ./Gemfile.lock /app/Gemfile.lock
RUN bundle install

COPY . .

CMD ["rails", "server", "-b", "127.0.0.1"]
