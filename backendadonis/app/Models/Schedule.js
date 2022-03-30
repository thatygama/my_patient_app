'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Schedule extends Model {
    doctor_crm(){
        return this.belongsTo('App/Models/Doctor')
    }
    patient_chart(){
        return this.belongsTo('App/Models/Patient')
        
    }
}

module.exports = Schedule
