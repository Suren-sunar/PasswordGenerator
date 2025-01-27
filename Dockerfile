FROM node:18
WORKDIR /PasswordGen
COPY . .
RUN npm install
CMD [ "npm","build" ]
EXPOSE 8080