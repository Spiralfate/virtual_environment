FROM ubuntu

RUN  apt-get -yq update \
     && apt-get -yqq install ssh \
     && apt-get install -y git

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

ENV WORKDIRECTORY /usr/src/app/

WORKDIR $WORKDIRECTORY

RUN npm install -g @angular/cli

RUN mkdir -p /root/.ssh/

RUN echo '${FRONTEND_SSH}' > /root/.ssh/id_rsa

# RUN touch /root/.ssh/known_hosts


# ENV REPO /var/temp/virt_env-frontend

RUN git clone https://github.com/Spiralfate/virtual_environment-frontend
RUN cd virtual_environment-frontend/ && npm install && ng build --outputPath=../frontend-built
