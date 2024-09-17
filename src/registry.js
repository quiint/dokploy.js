// src/registry.js

import Api from '../utils/makeRequest.js';

export default class Registry extends Api {
  async create(data) {
    return this.makeRequest('/registry.create', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/registry.remove', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/registry.update', 'POST', data);
  }

  async all() {
    return this.makeRequest('/registry.all');
  }

  async one(registryId) {
    return this.makeRequest(`/registry.one?registryId=${registryId}`);
  }

  async testRegistry(data) {
    return this.makeRequest('/registry.testRegistry', 'POST', data);
  }

  async enableSelfHostedRegistry(data) {
    return this.makeRequest('/registry.enableSelfHostedRegistry', 'POST', data);
  }
}


