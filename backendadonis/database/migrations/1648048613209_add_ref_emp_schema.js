'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRefEmpSchema extends Schema {
  async up () {
    await this.table('employees', (table) => {
      table.string('user_type').notNullable().references('user_type').inTable('user_types')
      table.string('user_email').notNullable().references('email').inTable('users')
    })
  }

  async down () {
    await this.table('employees', (table) => {
      table.dropColumn(['user_type', 'user_email'])
    })
  }
}

module.exports = AddRefEmpSchema
