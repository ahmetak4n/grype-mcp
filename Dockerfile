FROM node:lts-alpine3.22

RUN apk add grype

WORKDIR /app

COPY src src
COPY package.json tsconfig.json .

RUN npm install
RUN npm install -g tsx

EXPOSE 3000

ENTRYPOINT ["npx", "tsx", "/app/src/index.ts"]
