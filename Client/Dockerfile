# pull official base image
FROM node:16.2.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

# install app dependencies

RUN npm update

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.0 -g

# add app
COPY . ./
EXPOSE 8080
# start app
CMD ["npm", "start"]
#CMD ["/bin/sh"]