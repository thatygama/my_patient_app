'use strict'

const User = use("App/Models/User")

class AuthController{

    async login({auth, request, response}){
        const {email, password, user_type} = request.all();
        const token = await auth.attempt(email, password, user_type, {
            expiresIn: '365 days'
        })

        return token;
    }

    async logout({auth, request, response}){
        await auth.logout();
        return ("Logged out")
    }
}

module.exports = AuthController