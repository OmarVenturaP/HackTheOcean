const UserService = require("../services/UserService");

class UserController
{
    static async getAllUsers()
    {
        const allUsers = await UserService.getAllUsers();

        return allUsers;
    }

    static async getUserByID(id)
    {
        const user = await UserService.getUserByID(id);

        return user;
    }

    static async createUser(userData)
    {
        const response = await UserService.createUser(userData);

        return response;
    }

    static async updateUser(id, userData)
    {
        const response = await UserService.updateUser(id, userData);

        return response;
    }

    static async deleteUser(id)
    {
        const response = await UserService.deleteUser(id);

        return response;
    }

    static async signIn(email, password)
    {
        const response = await UserService.signIn(email, password);

        return response;
    }
}

module.exports = UserController;