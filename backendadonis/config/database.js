'use strict'

/** @type {import('@adonisjs/framework/src/Env')} */
const Env = use('Env')

/** @type {import('@adonisjs/ignitor/src/Helpers')} */
const Helpers = use('Helpers')

module.exports = {

  connection: Env.get('DB_CONNECTION', 'postgres'),

  
  pg: {
    client: 'pg',
    connection: {
      host: Env.get('DB_HOST', '127.0.0.1'),
      port: Env.get('DB_PORT', '5432'),
      user: Env.get('DB_USER', '***'),
      password: Env.get('DB_PASSWORD', '***'),
      database: Env.get('DB_DATABASE', 'MEUPaciente')
    }
  }
}
