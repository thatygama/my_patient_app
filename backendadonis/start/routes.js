const ScheduleController = require('../app/Controllers/Http/ScheduleController');

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/test/user_type', () => {
	return { message: 'Paciente, Médico ou Funcionário!' }
});


/* verify:
adonis route:list
*/
Route.resource("pacientes", "PatientController").apiOnly();
Route.get('/chart/:chart', 'PatientController.showChart');

Route.resource("medicos", "DoctorController").apiOnly();
Route.get('/crm/:crm', 'DoctorController.showCRM');

Route.resource("funcionarios", "EmployeeController").apiOnly();

Route.resource("usuarios", "UserController").apiOnly();
Route.delete('/usuarios/:email', 'UserController.destroy')
Route.resource("agendamentos", "ScheduleController").apiOnly();
Route.get('/paciente/agendamentos/:chart', 'ScheduleController.showChart');
Route.get('/medico/agendamentos/:crm', 'ScheduleController.showCRM');


Route.resource("atendimentos", "AttendanceController").apiOnly();
Route.get('/paciente/atendimentos/:chart', 'AttendanceController.showChart');
Route.get('/medico/atendimentos/:crm', 'ScheduleController.showCRM');


//as informacoes de User devem ser atualizadas ou adicionadas
//no FRONT sempre em conjunto com seu registro na table
//patients, doctors ou employee
//de acordo com seu user_type
Route.post('/novo_usuario', 'UserController.store')
Route.post('/editar_usuario/:email', 'UserController.update')
Route.post('/login', 'AuthController.login')
Route.post('/logout', 'AuthController.logout')