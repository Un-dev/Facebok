FROM node:14.7-buster

WORKDIR /api
COPY package.json ./
RUN npm install
COPY . .
RUN npm run jsdoc
EXPOSE 8000
CMD ["npm", "start"]