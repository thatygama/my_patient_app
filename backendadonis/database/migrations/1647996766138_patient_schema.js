'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PatientSchema extends Schema {
  up () {
    this.create('patients', (table) => {
      table.integer('chart', 30).notNullable().primary()
      //table.string('user_email').notNullable().references('email').inTable('users')
      // table.string('user_type').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('patients')
  }
}

module.exports = PatientSchema
