FROM node:16.0.0

WORKDIR /eBike

COPY ./ ./

RUN yarn install

ENTRYPOINT ["yarn", "start"]
