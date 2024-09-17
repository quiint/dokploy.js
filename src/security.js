// src/security.js

import Api from '../utils/makeRequest.js';

export default class Security extends Api {
  async create(data) {
    return this.makeRequest('/security.create', 'POST', data);
  }

  async one(securityId) {
    return this.makeRequest(`/security.one?securityId=${securityId}`);
  }

  async delete(data) {
    return this.makeRequest('/security.delete', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/security.update', 'POST', data);
  }
}
