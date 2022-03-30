'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddRefSchedSchema extends Schema {
  async up () {
    await this.table('schedules', (table) => {
      table.integer('patient_chart').notNullable().references('chart').inTable('patients')
      table.integer('doctor_crm').notNullable().references('crm').inTable('doctors')
    })
  }

  async down () {
    await this.table('schedules', (table) => {
      table.dropColumns(['patient_chart', 'doctor_crm'])
    })
  }
}

module.exports = AddRefSchedSchema
