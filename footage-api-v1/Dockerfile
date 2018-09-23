FROM starefossen/ruby-node:2-8-alpine
RUN apk update && \
    apk add nano build-base postgresql-dev tzdata && \
    gem install bundler
RUN mkdir /footage-api
COPY Gemfile Gemfile.lock /footage-api/
WORKDIR /footage-api
RUN bundle install
COPY . /footage-api
