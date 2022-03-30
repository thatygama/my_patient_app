'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScheduleSchema extends Schema {
  up () {
    this.create('schedules', (table) => {
      table.increments('id').notNullable().primary()
      // table.integer('patient_chart').notNullable()
      // table.integer('doctor_crm').notNullable()
      table.string('date', 80).notNullable()      
      table.string('hour', 80).notNullable()
      table.text('description')
      table.text('note')
      table.string('modified_by_user_email').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('schedules')
  }
}

module.exports = ScheduleSchema
