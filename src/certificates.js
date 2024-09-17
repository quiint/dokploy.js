// src/certificates.js

import Api from '../utils/makeRequest.js';

export default class Certificates extends Api {
  async create(data) {
    return this.makeRequest('/certificates.create', 'POST', data);
  }

  async one(certificateId) {
    return this.makeRequest(`/certificates.one?certificateId=${certificateId}`);
  }

  async remove(data) {
    return this.makeRequest('/certificates.remove', 'POST', data);
  }

  async all() {
    return this.makeRequest('/certificates.all');
  }
}
