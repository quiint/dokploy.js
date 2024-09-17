// src/domain.js

import Api from '../utils/makeRequest.js';

export default class Domain extends Api {
  async create(data) {
    return this.makeRequest('/domain.create', 'POST', data);
  }

  async byApplicationId(applicationId) {
    return this.makeRequest(`/domain.byApplicationId?applicationId=${applicationId}`);
  }

  async byComposeId(composeId) {
    return this.makeRequest(`/domain.byComposeId?composeId=${composeId}`);
  }

  async generateDomain(data) {
    return this.makeRequest('/domain.generateDomain', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/domain.update', 'POST', data);
  }

  async one(domainId) {
    return this.makeRequest(`/domain.one?domainId=${domainId}`);
  }

  async delete(data) {
    return this.makeRequest('/domain.delete', 'POST', data);
  }
}
