'use strict'

const Doctor = use("App/Models/Doctor")

class DoctorController {
    async store ({ request, response }) {
        const {user_type, user_email, crm, speciality} = request.all()
            const doctor = await Doctor.create({user_type, user_email, crm, speciality})
            return (`Cadastro de médico realizado com sucesso!`, doctor)
      }

    async show({ params }) {
        const user_email = params.id
        return await Doctor.findBy('user_email', user_email);    
    }

    async showCRM({ params }) {
        const crm = params.crm
        return await Doctor.findBy('crm', crm);    
    }

    async update({ params, request, response }) {
        const user_email = params.id
        const doctor = await Doctor.findBy('user_email', user_email);

        const {speciality} = request.only(['speciality'])

        doctor.merge({speciality});
        await doctor.save();
        return doctor;
    }

    async index({ request, response, view }) {
        return await Doctor.all();
    }
}

module.exports = DoctorController
