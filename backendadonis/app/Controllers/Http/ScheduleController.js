'use strict'

const Schedule = use("App/Models/Schedule")


class ScheduleController {
    async store ({ request, response }) {
        const data = request.only(["patient_chart", "doctor_crm", "modified_by_user_email", "date", "hour"])
    
        const schedule = await Schedule.create(data)
    
        return schedule
    //não receber cadastros na mesma data, hora e médico ou paciente
      }

    async show({ params }) {
        return await Schedule.find(params.id);
    }

    async showChart({ params }) {
        const chart = params.chart
        const schedules = await Schedule.query().where('patient_chart','=',chart).fetch()
        return schedules;
    }

    async showCRM({ params }) {
        const crm = params.crm
        const schedules = await Schedule.query().where('doctor_crm','=',crm).fetch()
        return schedules;
    }

    async update({ params, request, response }) {
        const schedule = await Schedule.findBy('id', params.id);
    
        const dataToUpdate = request.only(['patient_chart', 'doctor_crm', 'date', 'hour', "description", "note", "modified_by_user_email"]);
    
        schedule.merge(dataToUpdate);
        await schedule.save();
    
        return schedule;
    //não receber cadastros na mesma data, hora e médico ou paciente
    }

    async index({ request, response, view }) {
        return await Schedule.all();
    }

    async destroy({request, response, params}){
        const findToDelete = await Schedule.find(params.id);

        if(!findToDelete){
            return response.status(404)
        }
    
        await findToDelete.delete();
        return findToDelete
    }
}

module.exports = ScheduleController
