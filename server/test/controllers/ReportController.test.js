const ReportController = require("../../lib/controllers/ReportController");

describe("ReportController tests", () => {
    var theID = 0;

    test("Create Report", async () => {
        const reportData = {
            "name": "Juan",
            "lastname": "Quiroga",
            "latitude": 20,
            "longitude": -10.15,
            "status": "Open"
        };

        const report = await ReportController.createReport(reportData);

        theID = report.id;

        expect(theID).toBeGreaterThan(0);

        const reportCreated = await ReportController.getReportByID(theID);

        expect(reportCreated.name).toBe("Juan");
        expect(reportCreated.lastname).toBe("Quiroga");
        expect(reportCreated.latitude.toString()).toBe("20");
        expect(reportCreated.longitude.toString()).toBe("-10.15");
        expect(reportCreated.status).toBe("Open");
    });

    test ("Update Report", async () => {
        const updatedData = {
            "name": "Benito",
            "lastname": "Juárez",
            "latitude": 20,
            "longitude": -10.15,
            "status": "Closed"
        };

        await ReportController.updateReport(theID, updatedData);

        const updatedReport = await ReportController.getReportByID(theID);

        expect(updatedReport.name).toBe("Benito");
        expect(updatedReport.lastname).toBe("Juárez");
        expect(updatedReport.latitude.toString()).toBe("20");
        expect(updatedReport.longitude.toString()).toBe("-10.15");
        expect(updatedReport.status).toBe("Closed");
    });

    test("Delete Report", async () => {
        await ReportController.deleteReport(theID);

        const response = await ReportController.getReportByID(theID);

        expect(response).toBeNull();
    });
});