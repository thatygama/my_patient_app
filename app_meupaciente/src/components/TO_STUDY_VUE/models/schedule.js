export default class Schedule {
    constructor(date, hour, prescription, note, doctor_crm, patient_chart, modified_by_user_email) {
        this.date = date;
        this.hour = hour;
        this.prescription = prescription;
        this.note = note;
        this.doctor_crm = doctor_crm;
        this.patient_chart = patient_chart;
        this.modified_by_user_email = modified_by_user_email;
    }
  }