FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/
COPY ./html/ /var/www

RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/error.log

WORKDIR /etc/nginx

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 80
EXPOSE 443