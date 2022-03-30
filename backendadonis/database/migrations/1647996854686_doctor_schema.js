'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DoctorSchema extends Schema {
  up () {
    this.create('doctors', (table) => {
      table.integer('crm', 30).notNullable().primary()
      //table.string('user_email').notNullable().references('email').inTable('users')
      // table.string('user_type').notNullable()
      table.string('speciality', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('doctors')
  }
}

module.exports = DoctorSchema
