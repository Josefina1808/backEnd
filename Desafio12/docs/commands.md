# Comandos solicitados en consigna

## Consigna 1
pm2 start app.js  --name server_cluster -- --port 8081 --mode cluster
pm2 start app.js  --name server_fork -- --port 8080 --mode fork

Ver archivo de configuración en nginx/config1

## Consigna 2
pm2 start app.js  --name server_1 -- --port 8080 --mode fork
pm2 start app.js  --name server_2 -- --port 8082 --mode fork
pm2 start app.js  --name server_3 -- --port 8083 --mode fork
pm2 start app.js  --name server_4 -- --port 8084 --mode fork
pm2 start app.js  --name server_5 -- --port 8085 --mode fork

Ver archivo de configuración en nginx/config2