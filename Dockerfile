FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
    iputils-ping \
    iproute2 \
    curl \
    sudo \
    npm
RUN rm -rf /var/lib/apt/lists/*
RUN npm install -g ganache-cli

EXPOSE 8545
ENTRYPOINT ["ganache-cli", "-h", "0.0.0.0", "--acctKeys", "./keys.json", "--accounts", "1"]

# Alveg sama hvaða host ég nota hér, verður alltaf exposeað á 0.0.0.0