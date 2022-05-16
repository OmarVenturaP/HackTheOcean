const DonationController = require("../../lib/controllers/DonationController");

describe("DonationController tests", () => {
    var theID = 0;

    test("Create Donation", async () => {
        const donationData = {
            donatorName: "Omar Ventura",
            city: "Guadalajara",
            state: "Jalisco",
            amount: 5200,
            description: "For a better world.",
            status: "Open"
        };

        const donation = await DonationController.createDonation(donationData);

        theID = parseInt(donation.id);

        expect(theID).toBeGreaterThan(0);

        const donationCreated = await DonationController.getDonationByID(theID);

        expect(donationCreated.donatorName).toBe("Omar Ventura");
        expect(donationCreated.city).toBe("Guadalajara");
        expect(donationCreated.state).toBe("Jalisco");
        expect(donationCreated.amount.toString()).toBe("5200");
        expect(donationCreated.description).toBe("For a better world.");
        expect(donationCreated.status).toBe("Open");
    });

    test ("Update Donation", async () => {
        const updatedData = {
            donatorName: "Erick Becerril",
            city: "Cancún",
            state: "Yucatán",
            amount: 4800,
            description: "For a better world.",
            status: "Closed"
        };

        await DonationController.updateDonation(theID, updatedData);

        const updatedDonation = await DonationController.getDonationByID(theID);

        expect(updatedDonation.donatorName).toBe("Erick Becerril");
        expect(updatedDonation.city).toBe("Cancún");
        expect(updatedDonation.state).toBe("Yucatán");
        expect(updatedDonation.amount.toString()).toBe("4800");
        expect(updatedDonation.description).toBe("For a better world.");
        expect(updatedDonation.status).toBe("Closed");
    });

    test("Delete Donation", async () => {
        await DonationController.deleteDonation(theID);

        const response = await DonationController.getDonationByID(theID);

        expect(response).toBeNull();
    });
});