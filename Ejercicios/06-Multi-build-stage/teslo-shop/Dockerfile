FROM node:18.13-alpine3.17 AS dev
WORKDIR /app
COPY package.json ./
RUN npm install
CMD [ "npm","start:dev" ]


FROM node:18.13-alpine3.17 AS dev-deps
WORKDIR /app
COPY package.json ./
RUN npm install 


FROM node:18.13-alpine3.17 AS builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN npm test
RUN npm run build

FROM node:18.13-alpine3.17 AS prod-deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod 


FROM node:18.13-alpine3.17 AS prod
EXPOSE 3000
WORKDIR /app
ARG APP_VERSION
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]
