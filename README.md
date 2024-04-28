# Comet Portfolio

[![License: APL 2.0](https://img.shields.io/hexpm/l/plug.svg)](LICENCE)

## Page

Welcome **[Here](https://aecomet.github.io/)**!

## Developer documentation

### Languages

- Vue
- Vuetify
- Typescript

### Quick Preview

```sh
docker-compose up -d web
# => http://localhost:8888/
```

### Set up for local

```sh
node -v
# => v20.12.2

npm i -g pnpm

pnpm install

pnpm run dev
# => Local:   http://localhost:8888/
```

### Add packages

```sh
pnpm add -D ***
# or pnpm add ***

docker-compose stop web && docker-compose rm -f web

docker-compose build --no-cache web

docker-compose up -d --force-recreate web
```
