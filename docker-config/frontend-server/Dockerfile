FROM node

EXPOSE 8080

ENV FRONTEND-SERVER-PATH /usr/src/app/frontend-server

COPY ./src $FRONTEND-SERVER-PATH

WORKDIR $FRONTEND-SERVER-PATH

ENTRYPOINT [ "node", "server.js", ".", "/usr/src/app/frontend-built", "3000" ]