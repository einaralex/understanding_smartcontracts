npm install -g truffle
npm install -g ganache-cli
<<<<<<< HEAD
node 7.6 + (async/await)
=======


#npm install -g ethereumjs-testrpc

node 7.6 + (async/await)


DOCKERFILE
docker build -t ganache_cli_container .

Grípa addressur frá ganache-cli keyrslu
ganache-cli -a 1 | grep '(0)'


ganache-cli --acctKeys="./keys.json" --accounts 1

Nota addressur til að smíða create-smart-contract.

Það virkar að gera -h 0.0.0.0 báðum megin

DOCKER:

docker-compose -f docker-compose.yml up -d
docker run -dit --network=host -p 8545:8545 trufflesuite/ganache-cli:latest

version: '3'
services:
    ganachecli:
        image: trufflesuite/ganache-cli:latest
        command: bash -c "ganache-cli -h 0.0.0.0"
        ports:
        - 8545:8545
        network_mode: 'host'
>>>>>>> e54745b8f2d568df5c79c6f92287101548dd9ca5
