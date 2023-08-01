# FROM node AS build
# WORKDIR /source
# COPY . .
# RUN npm install
# RUN npm run build

FROM node:current-alpine
WORKDIR /app
# COPY --from=build ./build .
COPY ./build .
RUN npm install --production

EXPOSE 3000

ENTRYPOINT ["npm", "start"]