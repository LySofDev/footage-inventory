FROM node:8.12.0-alpine
RUN npm i -g yarn
RUN mkdir /dashboard-client
COPY . /dashboard-client
WORKDIR /dashboard-client
EXPOSE 4321
RUN yarn
