# Desafio 14 - DIVIDIR EN CAPAS NUESTRO PROYECTO

Dividir en capas el último desafío entregable. Agrupando apropiadamente las capas de ruteo, controlador, lógica de negocio y persistencia.

## Consigna

- Considerar agrupar las rutas por funcionalidad, con sus controladores, lógica de negocio con los casos de uso, y capa de persistencia.
- La capa de persistencia contendrá los métodos necesarios para atender la interacción de la lógica de negocio con los propios datos.

## Rutas

| Método | Endpoint            | Descripción                                                                                                                    |
| ------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| POST   | **/login**          | Formulario de login. Las sesesiones son almacenadas en mongoAtlas                                                              |
| POST   | **/logout**         | Se accede tras clicker al boton 'deslogear' y luego de 2 segundos redirige a /login.                                           |
| GET    | **/productos**      | Me permite listar todos los productos disponibles                                                                              |
| POST   | **/productos**      | Para incorporar productos al listado                                                                                           |
| GET    | **/productos-test** | Devuelve un listado de 5 productos mock generados con **Faker.js**                                                             |
| GET    | **/chat**           | Devuelve un chat desarrolado con socket que muestra la data desnormalizada y es almacenada normalizada en un archivo tipo JSON |
| GET    | **/info**           | Muestra información relativa a la app                                                                                          |

### Detalles y comentarios

# Autor

Josefina Esnaola

# Reconocimientos

Equipo CoderHouse
