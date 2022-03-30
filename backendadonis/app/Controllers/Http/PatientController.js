'use strict'

const Patient = use("App/Models/Patient")

class PatientController {
    async store ({ request, response }) {
        const {user_type, user_email, chart} = request.all()
            const patient = await Patient.create({user_type, user_email, chart})
            return (`Cadastro de paciente realizado com sucesso!`, patient)
      }

    async show({ params }) {
        const user_email = params.id
        return await Patient.findBy('user_email', user_email);    
    }

    async showChart({ params }) {
        const chart = params.chart;
        return await Patient.findBy('chart', chart);    
    }

    async update({ params, request, response }) {
        // const user_email = params.id
        // const patient = await Patient.findBy('user_email', user_email);

        // const data = request.all()

        // patient.merge(data);
        // await patient.save();
        return ("Dados não podem ser alterados. Consulte o administrador do site.")
    }

    async index({ request, response, view }) {
        return await Patient.all();
    }
}

module.exports = PatientController
