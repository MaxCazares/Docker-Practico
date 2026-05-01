# React Heroes App con Nginx
```
docker run --name Heroes-App -dp 8080:80 nginx:1.30.0-perl

docker build -t heroes-app:1.0.0 . --no-cache

docker run --name Heroes-App-Nginx -dp 80:80 heroes-app:1.0.0 
```