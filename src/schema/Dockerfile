FROM node:alpine as build
USER node
WORKDIR /build
COPY --chown=node . .
RUN npm install
RUN npm run build


FROM node:alpine
ENV NODE_ENV=production
USER node
WORKDIR /app
COPY --chown=node --from=build /build/dist ./dist
COPY --chown=node --from=build /build/ql ./ql
COPY --chown=node --from=build /build/package.json .
COPY --chown=node --from=build /build/package-lock.json .
RUN npm install
ENTRYPOINT [ "node", "." ]