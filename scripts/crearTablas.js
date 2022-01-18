import knex from 'knex'
import config from '../src/config.js'

// opciones SQL: mariaDb, sqlite3

crearTablasProductos(knex(config.sqlite3))
crearTablasCarritos(knex(config.sqlite3))

//------------------------------------------

async function crearTablasProductos(sqlClient) {
    try {
        await sqlClient.schema.dropTableIfExists('productos')

        await sqlClient.schema.createTable('productos', table => {
            table.increments('id').primary()
            table.string('title', 30).notNullable()
            table.float('price').notNullable()
            table.string('thumbnail', 1024)
        })

        await sqlClient.destroy()

        console.log('tabla productos creada con éxito')
    } catch (error) {
        console.log('error al crear tabla productos')
        console.log(error)
    }
}

//------------------------------------------

async function crearTablasCarritos(sqlClient) {
    try {
        await sqlClient.schema.dropTableIfExists('carritos')

        await sqlClient.schema.createTable('carritos', table => {
            table.increments('id').primary()
            table.boolean('deleted').defaultTo(false)
        })

        await sqlClient.schema.dropTableIfExists('prodsEnCarritos')

        await sqlClient.schema.createTable('prodsEnCarritos', table => {
            table.increments('id').primary()
            table.integer('idCarrito').notNullable()
            table.string('title', 30).notNullable()
            table.float('price').notNullable().notNullable()
            table.string('thumbnail', 1024)
        })

        await sqlClient.destroy()

        console.log('tablas carritos creada con éxito')
    } catch (error) {
        console.log('error al crear tablas carritos')
    }
}
