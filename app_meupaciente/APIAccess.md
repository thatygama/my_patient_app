export default {
    async mounted () {
    try {
        let responseMed = await axios.get('http://localhost:3333/medicos');
        let responseEmp = await axios.get('http://localhost:3333/funcionarios');
        let responsePat = await axios.get('http://localhost:3333/pacientes');
        let responseAtt = await axios.get('http://localhost:3333/atendimentos');
        let responseSch = await axios.get('http://localhost:3333/agendamentos');
        let medicos = responseMed.data;
        let funcionarios = responseEmp.data;
        let pacientes = responsePat.data;
        let atendimentos = responseAtt.data;
        let agendamentos = responseSch.data;
        console.log(medicos, atendimentos, agendamentos, funcionarios, pacientes);
        return medicos, atendimentos;
        } catch(e) {
        console.error(e);
        }
    }
}