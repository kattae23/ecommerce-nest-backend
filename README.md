<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


# Nest Ecommerce Api

1. Clone repository
2. ```yarn install```
3. Clone ```.env.template``` & rename to ```.env```
4. Change the env variables
5. Up the Postgres Database
```
docker-compose up -d
```

6. Up: ```yarn start:dev```

7. SEED The Database
```
http://localhost:3000/api/seed
```

# Production notes:

## Dockerize the app:

```bash
$ docker-compose -f docker-compose.prod.yaml up --build
```
```bash
$ docker-compose -f docker-compose.prod.yaml up -d
```
