# Desafio 15 - Mejorar la arquitectura de nuestra API
Retomemos nuestro trabajo para implementar los patrones de diseño Factory, DAO y DTO.

## Consigna
Modificar la capa de persistencia incorporando los conceptos de Factory, DAO, y DTO.

Los DAOs deben presentar la misma interfaz hacia la lógica de negocio de nuestro servidor.

El DAO seleccionado (por un parámetro en línea de comandos como lo hicimos anteriormente) será devuelto por una Factory para que la capa de negocio opere con el.

Cada uno de estos casos de persistencia, deberán ser implementados usando el patrón singleton que impida crear nuevas instancias de estos mecanismos de acceso a los datos.

Comprobar que si llamo a la factory dos veces, con una misma opción elegida, devuelva la misma instancia.

Implementar el patrón Repository para la persistencia de productos y mensajes.

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

### Detalles y comentarios
# Autor
Josefina Esnaola
# Reconocimientos
Equipo CoderHouse