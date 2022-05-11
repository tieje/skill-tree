#FROM tieje/rpi4_frontend:latest
FROM node:16.14.2
WORKDIR /frontend
RUN apt-get update
RUN npm install -g npm
RUN npm install -g serve
COPY package.json package-lock.json /frontend/
RUN npm install --legacy-peer-deps
COPY . .
ENV PATH /frontend/node_modules/.bin:$PATH
RUN npm run build
