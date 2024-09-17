import Postgres from "../src/postgres";

describe("postgres module", () => {

    const baseUrl = process.env.DOKPLOY_URL; // Replace with your Dokploy API base URL
    const apiToken = process.env.DOKPLOY_KEY; // Replace with a valid API token
    const postgres = new Postgres(baseUrl, apiToken);

    it("should create a new database", async () => {
        const data = {
            "name": "postgres",
            "appName": "POSTGRES!!",
            "databaseName": "main",
            "databaseUser": "admin",
            "databasePassword": "P@55W0Rd!",
            "dockerImage": "postgres:15",
            "projectId": process.env.DOKPLOY_PROJECT_ID,
            "description": "postgres from api2"
          };

        const response = await postgres.create(data);
        console.log("response: ", response);

        // response = true
        expect(response).toBeDefined();
        expect(response).toBe(true);
    });

});