# Desafio 12 - SERVIDOR CON BALANCE DE CARGA
Retomemos nuestro trabajo para poder ejecutar el servidor en modo fork o cluster, ajustando el balance de carga a través de Nginx.

## Consigna
1. Agregar en la vista info, el número de procesadores presentes en el servidor
2. Configurar Nginx para balancear cargas:
    - Redirigir todas las consultas a /randoms a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster. El resto de las consultas, redirigirlas a un servidor individual escuchando en el puerto 8080. (nginx/config1)
    - Luego, modificar la configuración para que todas las consultas a /randoms sean redirigidas a un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente. (nginx/config2)

## Ejecución
Instalar todas las dependencias con `npm i --save`. Para levantar el proyecto: en modo dev con nodemon, utilizar `nodemon app.js` o levantarlo en modo dev con node, utilizar `node app.js`. 

Proceso detallado para correr la app con nginx detallado en Docs/commands.md
## Rutas
| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | **/login**     | Formulario de login. Las sesesiones son almacenadas en mongoAtlas                                                                                                                                                                           |
| POST    | **/logout**     | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.                                                                                                                                                                          |
| GET    | **/productos**     | Me permite listar todos los productos disponibles                                                                                                                                                                           |
| POST   | **/productos**     | Para incorporar productos al listado                                                                                                                                                                                        |
| GET    | **/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js**                                                                                                                                                          |
| GET    | **/chat**        | Devuelve un chat desarrolado con socket que muestra la data desnormalizada y es almacenada normalizada en un archivo tipo JSON |
| GET    | **/info**        | Muestra información relativa a la app |
| GET    | **/randoms**        | Devuelve una cantidad de números aleatorios en el rango del 1 al 1000 especificada por parámetros de consulta (query). Por ej: `/api/randoms?cant=20000`. Si dicho parámetro no se ingresa, calcula 100.000.000 de números. |

### Detalles y comentarios
# Autor
Josefina Esnaola
# Reconocimientos
Equipo CoderHouse
