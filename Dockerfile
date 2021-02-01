FROM node:14.7-buster

WORKDIR /api
COPY package.json ./
RUN npm install
RUN npm run jsdoc
COPY . .
EXPOSE 8000
CMD ["npm", "start"]