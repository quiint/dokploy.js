// src/applications.js

import Api from '../utils/makeRequest.js';

export default class Applications extends Api {
  async create(data) {
    return this.makeRequest('/application.create', 'POST', data);
  }

  async one(applicationId) {
    return this.makeRequest(`/application.one?applicationId=${applicationId}`);
  }

  async reload(data) {
    return this.makeRequest('/application.reload', 'POST', data);
  }

  async delete(data) {
    return this.makeRequest('/application.delete', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/application.stop', 'POST', data);
  }

  async start(data) {
    return this.makeRequest('/application.start', 'POST', data);
  }

  async redeploy(data) {
    return this.makeRequest('/application.redeploy', 'POST', data);
  }

  async saveEnvironment(data) {
    return this.makeRequest('/application.saveEnvironment', 'POST', data);
  }

  async saveBuildType(data) {
    return this.makeRequest('/application.saveBuildType', 'POST', data);
  }

  async saveGithubProvider(data) {
    return this.makeRequest('/application.saveGithubProvider', 'POST', data);
  }

  async saveGitlabProvider(data) {
    return this.makeRequest('/application.saveGitlabProvider', 'POST', data);
  }

  async saveBitbucketProvider(data) {
    return this.makeRequest('/application.saveBitbucketProvider', 'POST', data);
  }

  async saveDockerProvider(data) {
    return this.makeRequest('/application.saveDockerProvider', 'POST', data);
  }

  async saveGitProvider(data) {
    return this.makeRequest('/application.saveGitProdiver', 'POST', data);
  }

  async markRunning(data) {
    return this.makeRequest('/application.markRunning', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/application.update', 'POST', data);
  }

  async refreshToken(data) {
    return this.makeRequest('/application.refreshToken', 'POST', data);
  }

  async deploy(data) {
    return this.makeRequest('/application.deploy', 'POST', data);
  }

  async cleanQueues(data) {
    return this.makeRequest('/application.cleanQueues', 'POST', data);
  }

  async readTraefikConfig(applicationId) {
    return this.makeRequest(`/application.readTraefikConfig?applicationId=${applicationId}`);
  }

  async updateTraefikConfig(data) {
    return this.makeRequest('/application.updateTraefikConfig', 'POST', data);
  }

  async readAppMonitoring(appName) {
    return this.makeRequest(`/application.readAppMonitoring?appName=${appName}`);
  }
}
