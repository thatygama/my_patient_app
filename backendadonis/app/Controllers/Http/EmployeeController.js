'use strict'

const Employee = use("App/Models/Employee")


class EmployeeController {
    async store ({ request, response }) {
        const {user_type, user_email, register} = request.all()
            const employee = await Employee.create({user_type, user_email, register})
            return (`Cadastro de funcionário realizado com sucesso!`, employee)
      }

    async show({ params }) {
        const user_email = params.id
        return await Employee.findBy('user_email', user_email);    
    }

    async update({ params, request, response }) {
        // const user_email = params.id
        // const employee = await Employee.findBy('user_email', user_email);

        // const data = request.all()

        // employee.merge(data);
        // await employee.save();
        return ("Dados não podem ser alterados. Consulte o administrador do site.")
    }

    async index({ request, response, view }) {
        return await Employee.all();
    }
}

module.exports = EmployeeController
