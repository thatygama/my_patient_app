'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Hash = use('Hash')

class Employee extends Model {
    user_type(){
        return this.belongsTo('App/Models/UserType')
    }

    static get primaryKey () {
        return 'register'
      }
    
    static get incrementing () {
    return false
    }
    
    static boot () {
        super.boot()
    
        this.addHook('beforeSave', async (employee) => {
          if (employee.dirty.password) {
            employee.password = await Hash.make(employee.password)
          }
        })
      }
      
      tokens () {
        return this.hasMany('App/Models/Token')
      }
}

module.exports = Employee
