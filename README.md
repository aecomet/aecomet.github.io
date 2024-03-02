# Hiyoko3 Portfolio

[![License: APL 2.0](https://img.shields.io/hexpm/l/plug.svg)](LICENCE)

## Production Page

**[Welcome Access!](https://hiyoko3.github.io/)**

## Developer documentation

### Languages

- Vue
- Vuetify
- Typescript

### quickstart

```sh
docker-compose up -d web
```

### Set up local

```sh
node -v
# => v20.10.0

npm i -g pnpm

pnpm install

pnpm run dev
# => Local:   http://localhost:8888/
```

### Add packages

```sh
pnpm add -D ***
# or pnpm add ***

# remove named volume
docker-compose stop web && docker-compose rm -f web
docker volume rm hiyoko3githubio_web_node_modules

docker-compose build --no-cache web

docker-compose up -d --force-recreate web
```
