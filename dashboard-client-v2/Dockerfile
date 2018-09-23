FROM node:8.11.3-alpine
RUN npm install -g @angular/cli
RUN mkdir /dashboard-client
COPY package*.json /dashboard-client/
WORKDIR /dashboard-client
RUN npm install
COPY . /dashboard-client
