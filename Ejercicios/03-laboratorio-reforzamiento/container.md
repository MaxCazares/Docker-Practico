# Laboratorio de reforzamiento

## Crear volumen para la base de datos
```
docker volume create postgres-db-vol
```

## Crear red para comunicar los contenedores
```
docker network create postgres-db-net
```

## Crear el contenedor de Postgres
```
docker container run ^
-dp 5432:5432 ^
--name postgres-db ^
-e POSTGRES_PASSWORD=123456 ^
-v postgres-db-vol:/var/lib/postgresql/data ^
--network 03-laboratorio-reforzamiento_default ^
postgres:15.1
```

## Crear el contenedor de PHPMyAdmin
```
docker container run ^
--name pgAdmin ^
-dp 80:80 ^
-e PGADMIN_DEFAULT_PASSWORD=123456 ^
-e PGADMIN_DEFAULT_EMAIL=superman@google.com ^
--network postgres-db-net ^
dpage/pgadmin4:6.17
```
