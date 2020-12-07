FROM node:14.15-buster

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

CMD ["yarn", "start"]