# Crisslions Typescript pan-plate

## What is this?
This is a basic typescript application

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

