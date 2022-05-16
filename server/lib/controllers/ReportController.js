const ReportService = require("./../services/ReportService");

class ReportController
{
    static async getAllReports()
    {
        const allReports = await ReportService.getAllReports();

        return allReports;
    }

    static async getReportByID(id)
    {
        const report = await ReportService.getReportByID(id);

        return report;
    }

    static async createReport(reportData)
    {
        const response = await ReportService.createReport(reportData);

        return response;
    }

    static async updateReport(id, reportData)
    {
        const response = await ReportService.updateReport(id, reportData);

        return response;
    }

    static async deleteReport(id)
    {
        const response = await ReportService.deleteReport(id);

        return response;
    }
}

module.exports = ReportController;