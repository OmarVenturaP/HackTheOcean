const DonationService = require("./../services/DonationService");

class DonationController
{
    static async getAllDonations()
    {
        const allDonations = await DonationService.getAllDonations();

        return allDonations;
    }

    static async getDonationByID(id)
    {
        const donation = await DonationService.getDonationByID(id);

        return donation;
    }

    static async createDonation(donationData)
    {
        const response = await DonationService.createDonation(donationData);

        return response;
    }

    static async updateDonation(id, donationData)
    {
        const response = await DonationService.updateDonation(id, donationData);

        return response;
    }

    static async deleteDonation(id)
    {
        const response = await DonationService.deleteDonation(id);

        return response;
    }
}

module.exports = DonationController;