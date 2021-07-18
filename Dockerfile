FROM node:12
RUN mkdir /api
COPY ./ /api
WORKDIR /api
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]