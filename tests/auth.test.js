// auth.one
//     ✓ should return a single user (96ms)


import Auth from "../src/auth";

describe("auth.one", () => {

    const baseUrl = process.env.DOKPLOY_URL; // Replace with your Dokploy API base URL
    const apiToken = process.env.DOKPLOY_KEY; // Replace with a valid API token // Replace with a valid API token
    const auth = new Auth(baseUrl, apiToken);

    it("should return a single user", async () => {
        const response = await auth.one(process.env.DOKPLOY_USER_ID);
        console.log("response: ", response);

        expect(response.id).toBeDefined();
    }
    );

    it("auth.get", async () => {
        const response = await auth.get();
        console.log(response);

        expect(response).toBeDefined();
    })
}
);
