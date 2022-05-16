const UserController = require("../../lib/controllers/UserController");

describe("UserController tests", () => {
    var theID = 0;

    test("Create User", async () => {
        const userData = {
            "name": "Juan",
            "lastname": "Quiroga",
            "role": "Admin",
            "email": "juan@innovaccion.mx",
            "pass": "abc"
        };

        const user = await UserController.createUser(userData);

        theID = user.id;

        expect(theID).toBeGreaterThan(0);

        const addedUser = await UserController.getUserByID(theID);

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

        await UserController.updateUser(theID, updatedData);

        const updatedUser = await UserController.getUserByID(theID);

        expect(updatedUser.name).toBe("Pedro");
        expect(updatedUser.lastname).toBe("Infante");
        expect(updatedUser.role).toBe("User");
        expect(updatedUser.email).toBe("pedro.infante@innovaccion.mx");
        expect(updatedUser.pass).toBe("qwe");
    });

    test("Login User", async () => {
        const response = await UserController.signIn("pedro.infante@innovaccion.mx", "anything");

        expect(response.message).toBe("BAD");

        const response2 = await UserController.signIn("pedro.infante@innovaccion.mx", "qwe");

        expect(response2.message).toBe("OK");
    });

    test("Delete User", async () => {
        await UserController.deleteUser(theID);

        const response = await UserController.getUserByID(theID);

        expect(response).toBeNull();
    });
});