'use strict'

const Attendance = use("App/Models/Attendance")


class AttendanceController {
    async store ({ request, response }) {
        const data = request.only(["patient_chart", "doctor_crm", "date", "hour", "modified_by_user_email"])
    
        const attendance = await Attendance.create(data)
    
        return attendance
        //não receber cadastros na mesma data, hora e médico ou paciente
      }

    async show({ params }) {
        return await Attendance.find(params.id);
    }

    async showChart({ params }) {
        const chart = params.chart
        const attendances = await Attendance.query().where('patient_chart','=',chart).fetch()
        return attendances;
    }

    async showCRM({ params }) {
        const crm = params.crm
        const attendances = await Attendance.query().where('doctor_crm','=',crm).fetch()
        return attendances;
    }

    async update({ params, request, response }) {
        const attendance = await Attendance.findBy('id', params.id);
    
        const dataToUpdate = request.only(['patient_chart', 'doctor_crm', 'date', 'hour', "prescription", "note", "modified_by_user_email"]);
    
        attendance.merge(dataToUpdate);
        await attendance.save();
    
        return attendance;
    //não receber cadastros na mesma data, hora e médico ou paciente
    }

    async index({ request, response, view }) {
        return await Attendance.all();
    }

    async destroy({request, response, params}){
        const findToDelete = await Attendance.find(params.id);

        if(!findToDelete){
            return response.status(404)
        }
    
        await findToDelete.delete();
        return findToDelete;
    }
}

module.exports = AttendanceController
