FROM node:latest

WORKDIR /app
# If you add the package.json first and run npm install later, Docker won't have to install the dependencies again if you change the package.json file. https://buddy.works/guides/how-dockerize-node-application
COPY package.json /app
RUN npm install
COPY . /app

RUN npm run build

CMD npm start
EXPOSE 3000
