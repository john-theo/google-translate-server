FROM node:alpine
ENV DOMAIN=com
RUN mkdir -p app
WORKDIR /app/
ADD ./* /app/
RUN npm install
CMD npm start -- --domain $DOMAIN