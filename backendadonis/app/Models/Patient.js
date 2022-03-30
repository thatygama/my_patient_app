'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Patient extends Model {
    user_type(){
        return this.belongsTo('App/Models/UserType')
    }

    static get primaryKey () {
        return 'chart'
      }
    
    static get incrementing () {
    return false
    }

    static boot () {
        super.boot()
    
        this.addHook('beforeSave', async (patient) => {
          if (patient.dirty.password) {
            patient.password = await Hash.make(patient.password)
          }
        })
      }
      
      tokens () {
        return this.hasMany('App/Models/Token')
      }
}

module.exports = Patient
