const UserService = require("../../lib/services/UserService");

describe("UserService tests", () => {
    var theID = 0;

    test("Create User", async () => {
        const userData = {
            "name": "Juan",
            "lastname": "Quiroga",
            "role": "Admin",
            "email": "juan@innovaccion.mx",
            "pass": "abc"
        };

        const user = await UserService.createUser(userData);

        theID = user.id;

        expect(theID).toBeGreaterThan(0);

        const addedUser = await UserService.getUserByID(theID);

        expect(addedUser.name).toBe("Juan");
        expect(addedUser.lastname).toBe("Quiroga");
        expect(addedUser.role).toBe("Admin");
        expect(addedUser.email).toBe("juan@innovaccion.mx");
        expect(addedUser.pass).toBe("abc");
    });

    test ("Update User", async () => {
        const updatedData = {
            "name": "Pedro",
            "lastname": "Infante",
            "role": "User",
            "email": "pedro.infante@innovaccion.mx",
            "pass": "qwe"
        };

        await UserService.updateUser(theID, updatedData);

        const updatedUser = await UserService.getUserByID(theID);

        expect(updatedUser.name).toBe("Pedro");
        expect(updatedUser.lastname).toBe("Infante");
        expect(updatedUser.role).toBe("User");
        expect(updatedUser.email).toBe("pedro.infante@innovaccion.mx");
        expect(updatedUser.pass).toBe("qwe");
    });

    test("Login User", async () => {
        const response = await UserService.signIn("pedro.infante@innovaccion.mx", "anything");

        expect(response.message).toBe("BAD");

        const response2 = await UserService.signIn("pedro.infante@innovaccion.mx", "qwe");

        expect(response2.message).toBe("OK");
    });

    test("Delete User", async () => {
        await UserService.deleteUser(theID);

        const response = await UserService.getUserByID(theID);

        expect(response).toBeNull();
    });
});