FROM ubuntu

RUN  apt-get -yq update \
     && apt-get -yqq install ssh \
     && apt-get install -y git

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs

ENV WORKDIRECTORY /usr/src/app/

WORKDIR $WORKDIRECTORY

RUN mkdir -p /root/.ssh/

RUN echo '${BACKEND_SSH}' > /root/.ssh/id_rsa

RUN git clone https://github.com/Spiralfate/virtual_environment-backend backend-built
