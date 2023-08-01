# FROM node:current-alpine AS build
# WORKDIR /source
# COPY . .
# RUN npm install
# RUN npm run build

FROM node:current-alpine
WORKDIR /app
# COPY --from=build ./build .
COPY ./.next ./.next
COPY ./.env.docker ./.env.local
COPY package.json .
COPY package-lock.json .
RUN npm install --production

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]