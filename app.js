const express = require("express");

const app = express();

app.listen(8080);

//Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo JSON en formato urlencoded al recibirlos, debemos indicarlo en forma explícita
app.use(express.json())
app.use(express.urlencoded({extended: true})) 
//{extended:true} precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo cadenas.

let ciudades = [
  { id: 1, nombre: "Bogotá", pais: "Colombia" },
  { id: 2, nombre: "San Juan", pais: "Argentina" },
  { id: 3, nombre: "Villa Mercedes", pais: "Argentina" },
  { id: 1, nombre: "Medellin", pais: "Uruguay" },
];

//PEDIR
app.get("/", (req, res) => {
    res.send(`
          <a href="/api/ciudades">Saludo<a>
      `);
  });

app.get("/api/ciudades", (req, res) => {
  console.log("GET recibido");
  if (Object.entries(req.query).length > 0) {
    res.json({
      result: ciudades.filter((c) => c.pais === req.query.pais),
      query: req.query,
    });
  } else {
    res.json(ciudades);
  }
});

app.get("/api/ciudades/:id", (req, res) => {
  console.log("GET recibido");
  console.log(req.params.id);
  let id = req.params.id;
  let ciudad = ciudades.find((c) => c.id == id);

  res.json(ciudad);
});

//ENVIAR --> POST
app.post("/api/ciudad", (req, res) => {
  console.log("POST request");
  const mensaje = req.body;

  let max = 0;
  
  for(const c of ciudades) {
    if(c.id > max) max = c.id
  }
  max++;

  let newCity = {
    id: max,
    nombre: mensaje.nombre,
    pais: mensaje.pais,
  };

  ciudades.push(newCity)
  
  return res.send(newCity);
});

//ACTUALIZAR --> PUT
app.put("/api/ciudades/:pais", (req, res) => {
  console.log("POST request");
  
  const mensaje = req.body
  
  //update DB
  res.send({
      result: 'OK',
      pais: req.params.pais,
      nuevo: req.body,
  });
});

//BORRAR --> DELETE
app.delete("/api/ciudades/:nombre", (req, res) => {
    console.log("POST request");
    const mensaje = req.body;
  
    //delete from DB
    res.send({
        result: 'OK',
        pais: req.params.nombre,
    });
  });