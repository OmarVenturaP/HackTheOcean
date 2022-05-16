// Using Express
const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// CORS
// const cors = require("cors");

// const corsOptions = {
//     origin: "http://localhost:8081"
// };

/***
 * API CRUD
 */

app.get("/", (req, res) => {
    res.json({ message: "alive" });
});

/**
 * Reports
 */

const ReportController = require("./controllers/ReportController");

app.get("/reports", async (req, res) => {
    const allReports = await ReportController.getAllReports();
    
    res.json(allReports);
});

app.get("/reports/:id", async (req, res) => {
    const report = await ReportController.getReportByID(req.params.id);

    res.json(report);
});

app.post("/reports", async (req, res) => {
    const reportData = {
        name: req.body.name,
        lastname: req.body.lastname,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        status: req.body.status
    };

    const response = await ReportController.createReport(reportData);

    res.json(response);
});

app.put("/reports/:id", async (req,res) => {
    const report = {
        name: req.body.name,
        lastname: req.body.lastname,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        status: req.body.status
    };

    const response = await ReportController.updateReport(req.params.id, report);

    return res.json(response);
});

app.delete("/reports/:id", async (req, res) => {   
    const response = await ReportController.deleteReport(req.params.id);

    return res.json(response);
});

/**
 * Donations
 */
const DonationController = require("./controllers/DonationController");


app.get("/donations", async (req, res) => {
    const allDonations = await DonationController.getAllDonations();

    res.json(allDonations);
});

app.get("/donations/:id", async (req, res) => {
    const donation = await DonationController.getDonationByID(req.params.id);

    res.json(donation);
});

app.post("/donations", async (req, res) => {
    const donation = {
        donatorName: req.body.donatorName,
        city: req.body.city,
        state: req.body.state,
        amount: req.body.amount,
        description: req.body.description,
        status: req.body.status
    };

    const response = await DonationController.createDonation(donation);

    res.json(response);
});

app.put("/donations/:id", async (req,res) => {
    const donationData = {
        donatorName: req.body.donatorName,
        city: req.body.city,
        state: req.body.state,
        amount: req.body.amount,
        description: req.body.description,
        status: req.body.status
    };

    const response = await DonationController.updateDonation(req.params.id, donationData);

    res.json(response);
});

app.delete("/donations/:id", async (req, res) => {
    const response = await DonationController.deleteDonation(req.params.id);

    res.json(response);
});

/**
 * Open ${port}
 */
app.listen(port, () => {
    console.log(`Listening to requests on port ${port}`);
});