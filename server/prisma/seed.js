const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
    try {
        console.log("Creating initial reports");

        await prisma.report.upsert({
            where: { id: 0 },
            update: {},
            create: {
                name: "Ricardo",
                lastname: "González",
                latitude: 20.646325,
                longitude: -87.052347,
                status: "Abierto"
            },
        });

        await prisma.report.upsert({
            where: { id: 0 },
            update: {},
            create: {
                name: "Omar",
                lastname: "Ventura",
                latitude: 20.603099,
                longitude: -87.089922,
                status: "Abierto"
            },
        });

        await prisma.report.upsert({
            where: { id: 0 },
            update: {},
            create: {
                name: "Erick Adrián",
                lastname: "Becerril",
                latitude: 21.078189,
                longitude: -86.772624,
                status: "Abierto"
            },
        });

        await prisma.report.upsert({
            where: { id: 0 },
            update: {},
            create: {
                name: "Fabián",
                lastname: "Hernández",
                latitude: 21.149660,
                longitude: -86.792065,
                status: "Abierto"
            },
        });

        await prisma.report.upsert({
            where: { id: 0 },
            update: {},
            create: {
                name: "Esmeralda",
                lastname: "Santoyo",
                latitude: 21.191081,
                longitude: -86.805447,
                status: "Abierto"
            },
        });

        /**
         * Donation
         */
        await prisma.donation.upsert({
            where: { id: 0 },
            update: {},
            create: {
                donatorName: "Ricardo González",
                city: "Monterrey",
                state: "Nuevo León",
                amount: 5000,
                description: "Donation to the cause",
                status: "Open"
            },
        });

        /**
         * User
         */
        await prisma.user.upsert({
            where: { id: 0 },
            update: {},
            create: {
                name: "Ricardo",
                lastname: "González",
                role: "Admin",
                email: "launchx03749@innovaccion.mx",
                pass: "12345678"
            },
        });

        console.log("Done. Records created.");
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();