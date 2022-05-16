const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserService
{
    static async getAllUsers()
    {
        const allUsers = await prisma.user.findMany({});

        return allUsers;
    }

    static async getUserByID(id)
    {
        const theID = parseInt(id);

        const user = await prisma.user.findUnique({ where: { id: theID } });

        return user;
    }

    static async createUser(userData)
    {
        // TODO Add ErrorHandling
        //      Check required fields in userData

        const user = await prisma.user.create({
            data: userData,
            select: {
                id: true
            }
        });

        return { message: "OK", id: user.id };
    }

    static async updateUser(id, userData)
    {
        // TODO Add ErrorHandling
        const theID = parseInt(id);

        await prisma.user.update({
            where: { id: theID },
            data: userData
        });

        return { message: "OK", id: theID };
    }

    static async deleteUser(id)
    {
        // TODO Add Error Handling
        const theID = parseInt(id);

        await prisma.user.delete({ where: { id: theID }});

        return { message: "OK", id: theID };
    }

    static async signIn(theEmail, thePassword)
    {
        const userRet = await prisma.user.findFirst({ where: { email: theEmail } });

        console.log(userRet);

        if (userRet.pass == thePassword)
        {
            return { message: "OK" };
        }
        
        return { message: "BAD" };
    }
}

module.exports = UserService;