# Currency exchange rate preview 

## What is this?
Simplest way how to check current currency exchange rates on the web!
Deploy on your own server and enjoy!

## Requirments

- Yarn

## How to start developing

```
yarn
yarn run start
```
go to localhost:8080

## How to run tests

```
yarn run test
```

## How to build docker image for server

### Requirements
- Docker
- Used added to docker group [Read more here](https://docs.docker.com/install/linux/linux-postinstall/)

> This will build the app and create docker image
```
yarn run dist
```

> This will only create docker image, but have to have build app at least once
```
yarn run docker
```

