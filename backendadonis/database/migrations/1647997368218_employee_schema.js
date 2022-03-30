'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.integer('register', 30).notNullable().primary()
      //table.string('user_email').notNullable().references('email').inTable('users')
      // table.string('user_type').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
