'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRefPatSchema extends Schema {
  async up () {
    await this.table('patients', (table) => {
      table.string('user_type').notNullable().references('user_type').inTable('user_types')
      table.string('user_email').notNullable().references('email').inTable('users')
    })
  }

  async down () {
    await this.table('patients', (table) => {
      table.dropColumns(['user_type', 'user_email'])
    })
  }
}

module.exports = AddRefPatSchema
