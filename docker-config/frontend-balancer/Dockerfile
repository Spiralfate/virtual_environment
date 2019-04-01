FROM nginx

# RUN apt-get update -y && apt-get install -y nginx

# RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf
# RUN chown -R www-data:www-data /var/lib/nginx

# EXPOSE 80

COPY ./nginx/nginx.conf /etc/nginx/
COPY ./html/ /var/www

RUN mkdir /etc/nginx/logs && touch /etc/nginx/logs/error.log

WORKDIR /etc/nginx

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 80
EXPOSE 443