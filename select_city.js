const { options } = requiere("./options/db.js");
const knex = require("knex")(options);

knex.from('ciudades').select("*")
    .then(row => {
        for(const row of rows) {
            console.log(`${row[id]} ${row[name]} ${row[population]}`);
        }
    })
    .catch((err) => {console.log(err);throw err;})
    .finally(() => {knex.destroy();});

//Seleciona las ciudades con más de 1000 de población
knex.from('ciudades').select("name", "population").where('population', '>' , '1000')
    .then(row => {
        for(const row of rows) {
            console.log(`${row[id]} ${row[name]} ${row[population]}`);
        }
    })
    .catch((err) => {console.log(err);throw err;})
    .finally(() => {knex.destroy();});