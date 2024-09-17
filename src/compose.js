// src/compose.js

import Api from '../utils/makeRequest.js';

export default class Compose extends Api {
  async create(data) {
    return this.makeRequest('/compose.create', 'POST', data);
  }

  async one(composeId) {
    return this.makeRequest(`/compose.one?composeId=${composeId}`);
  }

  async update(data) {
    return this.makeRequest('/compose.update', 'POST', data);
  }

  async delete(data) {
    return this.makeRequest('/compose.delete', 'POST', data);
  }

  async cleanQueues(data) {
    return this.makeRequest('/compose.cleanQueues', 'POST', data);
  }

  async loadServices(composeId, type = 'cache') {
    return this.makeRequest(`/compose.loadServices?composeId=${composeId}&type=${type}`);
  }

  async fetchSourceType(data) {
    return this.makeRequest('/compose.fetchSourceType', 'POST', data);
  }

  async randomizeCompose(data) {
    return this.makeRequest('/compose.randomizeCompose', 'POST', data);
  }

  async getConvertedCompose(composeId) {
    return this.makeRequest(`/compose.getConvertedCompose?composeId=${composeId}`);
  }

  async deploy(data) {
    return this.makeRequest('/compose.deploy', 'POST', data);
  }

  async redeploy(data) {
    return this.makeRequest('/compose.redeploy', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/compose.stop', 'POST', data);
  }

  async getDefaultCommand(composeId) {
    return this.makeRequest(`/compose.getDefaultCommand?composeId=${composeId}`);
  }

  async refreshToken(data) {
    return this.makeRequest('/compose.refreshToken', 'POST', data);
  }

  async deployTemplate(data) {
    return this.makeRequest('/compose.deployTemplate', 'POST', data);
  }

  async templates() {
    return this.makeRequest('/compose.templates');
  }

  async getTags() {
    return this.makeRequest('/compose.getTags');
  }
}
