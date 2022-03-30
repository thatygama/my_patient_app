'use strict'

const User = use("App/Models/User")

class UserController {
    async store ({ request, response }) {
        const {user_type, name, last_name, email, password} = request.all()
        const checkEmail = await User.findBy('email', email);
        if(!checkEmail){
            const user = await User.create({user_type, name, last_name, email, password})
            return (`Cadastro de usuário realizado com sucesso!:`, user)
        } else{
            return ('Email já utilizado!')
        }
      }

    async show({ params }) {
        return await User.find(params.id);    
    }

    async update({ params, request, response }) {
        const user = await User.findBy('email', params.id);

        const data = request.only(['name', 'last_name', 'email', 'password'])

        user.merge(data);
        await user.save();
        return user;
    }

    async index({ request, response, view }) {
        return await User.all();
    }

    async destroy({params, request, response}){
        const email = params.id;
        await User.query().where('email', email).delete()

        return "Usuário deletado"
    }
}

module.exports = UserController
