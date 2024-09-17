// tests/applications.js
import Applications from '../src/applications.js';

describe('Applications Module', () => {
  const baseUrl = process.env.DOKPLOY_URL; // Replace with your Dokploy API base URL
  const apiToken = process.env.DOKPLOY_KEY; // Replace with a valid API token
  const applications = new Applications(baseUrl, apiToken);

  it('should create a new application', async () => {
    const data = {
      name: 'TestApp',
      appName: 'test-app',
      description: 'This is a test application',
      projectId: process.env.DOKPLOY_PROJECT_ID // Replace with a valid project ID
    };

    const response = await applications.create(data);
    console.log("response: ", response);

    // Replace these assertions with specific checks based on your API response
    expect(response).toBeDefined(); // Check if response is not undefined
  });

  it('should retrieve an application by ID', async () => {
    const applicationId = process.env.DOKPLOY_APP_ID; // Replace with a valid application ID
    const response = await applications.one(applicationId);
    console.log("response for ID: ", response);

    expect(response).toBeDefined(); 
  });

  it('should handle invalid input', async () => {
    const invalidData = { 
        name: 'TestApp',
        appName: 'test-app',
        description: 'This is a test application',
    };
    await expect(applications.create(invalidData)).rejects.toThrowError(); 
  });

});
