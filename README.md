# microservice-thephotos
developing microservice

## Getting started

### To get the Node server running locally:

- Clone this repo
- `npm install` to install all required dependencies
- `npm run dev` to start the local server
- the API is available at http://localhost:3000/api

#### Multiple instances
You can run multiple instances of services. In this case you need to use a transporter i.e.: [NATS](https://nats.io). NATS is a lightweight & fast message broker. Download it and start with `gnatsd` command. After it started, set the `TRANSPORTER` env variable and start services.
```
TRANSPORTER=nats://localhost:4222
```

### To get the Node server running locally with Docker
- Clone this repo
- Start with docker-compose: `docker compose up -d`. It starts all services in separated containers, a NATS server for communication, a MongoDB server for database and a [Traefik](https://traefik.io/) reverse proxy
- Open the http://localhost:3000/api or docker-ip:3000/api

### Scale up services
Run this command
	`docker-compose scale api=3 articles=2 users=2 comments=2 follows=2 favorites=2`