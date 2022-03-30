'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Doctor extends Model {
    user_type(){
        return this.belongsTo('App/Models/UserType')
    }

    static get primaryKey () {
        return 'crm'
      }
    
    static get incrementing () {
    return false
    }

    static boot () {
        super.boot()
    
        this.addHook('beforeSave', async (doctor) => {
          if (doctor.dirty.password) {
            doctor.password = await Hash.make(doctor.password)
          }
        })
      }
      
      tokens () {
        return this.hasMany('App/Models/Token')
      }
}

module.exports = Doctor
