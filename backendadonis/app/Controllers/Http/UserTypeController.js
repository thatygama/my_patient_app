'use strict'

const UserType = use("App/Models/UserType")

class UserTypeController {
    async index({ request, response, view }) {
        return await UserType.all();
    }

    async show({ params }) {
        return await UserType.find(params.id);
    }
}

module.exports = UserTypeController
