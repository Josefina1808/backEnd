const { options } = require('./options/db.js')
const knex = require("knex")(options);

class Contenedor {
  constructor() {
    this.tableName = 'products';
    this.init()
  }
  init() {
    knex.schema
      .createTable(this.tableName, (table) => {
        table.increments("id");
        table.string("title");
        table.integer("price");
        table.string("thumbnail");
      })
      .then(() => console.log("Table created"))
      .catch((err) => {
        console.log(err);
        throw err;
      })
      .finally(() => {
        knex.destroy();
      });
  }

  save(object) {
    knex(this.tableName)
    .insert(object)
    .then(() => console.log("Data inserted"))
    .catch((err) => {console.log(err);throw err;})
    .finally(() => {knex.destroy();});
    return `Objeto añadido`;
  }

  getAll() {
    knex.from(this.tableName).select()
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['title']} ${row['price']}`);
        }
    }).catch(err => {console.log(err); throw err})
    .finally( () => {
        knex.destroy();
    });
  }

  getById(id) {
    knex.from(this.tableName).select().where('id', '=', id)
    .then((rows) => {
        for (row of rows) {
            console.log(`${row['title']} ${row['price']}`);
        }
    }).catch(err => {console.log(err); throw err})
    .finally( () => {
        knex.destroy();
    });
  }

  deleteById(id) {
    knex.from(this.tableName).where("id", "=", id).del()
    .then(() => {
        console.log("object deleted")
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })
  }

  async deleteAll() {
    knex.from(this.tableName).del()
    .then(() => {
        console.log("all data deleted")
    })
    .catch(err => {console.log(err); throw err; })
    .finally(() => {
        knex.destroy();
    })
  }
}

module.exports = Contenedor;
