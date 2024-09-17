// src/redirects.js

import Api from '../utils/makeRequest.js';

export default class Redirects extends Api {
  async create(data) {
    return this.makeRequest('/redirects.create', 'POST', data);
  }

  async one(redirectId) {
    return this.makeRequest(`/redirects.one?redirectId=${redirectId}`);
  }

  async delete(data) {
    return this.makeRequest('/redirects.delete', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/redirects.update', 'POST', data);
  }
}
