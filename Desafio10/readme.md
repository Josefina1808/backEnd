# Desafio 10 - LOG-IN POR FORMULARIO
Incorporar un mecanismo sencillo que permite loguear un 
cliente por su nombre mediante un formulario de ingreso
## Consigna
- Continuando con el desafío de la clase anterior, se incorporó un mecanismo sencillo que permite loguear un cliente por su nombre, mediante un formulario de ingreso.
- Luego de que el usuario esté logueado, se mostrará sobre el contenido del sitio un cartel con el mensaje “Bienvenido” y el nombre de usuario. Este cartel tendrá un botón de deslogueo a su derecha.
- Verificar que el cliente permanezca logueado en los reinicios de la página, mientras no expire el tiempo de inactividad de un minuto, que se recargará con cada request. En caso de alcanzarse ese tiempo, el próximo request de usuario nos llevará al formulario de login.
- Al desloguearse, se mostrará una vista con el mensaje de 'Hasta luego' más el nombre y se retornará automáticamente, luego de dos segundos, a la vista de login de usuario..

# Detalles
Persistir las sesiones de usuario en Mongo Atlas.
- Verificar que en los reinicios del servidor, no se pierdan las sesiones activas de los clientes.
- Mediante el cliente web de Mongo Atlas, revisar los id de sesión correspondientes a cada cliente y sus datos.
- Borrar una sesión de cliente en la base y comprobar que en el próximo request al usuario se le presente la vista de login.
- Fijar un tiempo de expiración de sesión de 10 minutos recargable con cada visita del cliente al sitio y verificar que si pasa ese tiempo de inactividad el cliente quede deslogueado

## Rutas
| Método | Endpoint                | Descripción                                                                                                                                                                                                                 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST    | **/login**     | Formulario de login. Las sesesiones son almacenadas en mongoAtlas                                                                                                                                                                           |
| POST    | **/logout**     | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.                                                                                                                                                                          |
| GET    | **/productos**     | Me permite listar todos los productos disponibles                                                                                                                                                                           |
| POST   | **/productos**     | Para incorporar productos al listado                                                                                                                                                                                        |
| GET    | **/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js**                                                                                                                                                          |
| GET    | **/chat**        | Devuelve un chat desarrolado con socket que muestra la data desnormalizada y es almacenada normalizada en un archivo tipo JSON |

# Autor
Josefina Esnaola
# Reconocimientos
Equipo CoderHouse
