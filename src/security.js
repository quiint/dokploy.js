// src/security.js

import Api from '../utils/makeRequest.js';

export default class Security extends Api {
    async create(applicationId, username, password) {
        return this.makeRequest('/security.create', 'POST', {
          applicationId,
          username,
          password,
        });
      }
    
      async delete(securityId) {
        return this.makeRequest('/security.delete', 'POST', { securityId });
      }
    
      async update(securityId, username, password) {
        return this.makeRequest('/security.update', 'POST', {
          securityId,
          username,
          password,
        });
      }
    
  async one(securityId) {
    return this.makeRequest(`/security.one?securityId=${securityId}`);
  }
}
