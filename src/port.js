// src/port.js

import Api from '../utils/makeRequest.js';

export default class Port extends Api {
  async create(data) {
    return this.makeRequest('/port.create', 'POST', data);
  }

  async one(portId) {
    return this.makeRequest(`/port.one?portId=${portId}`);
  }

  async delete(data) {
    return this.makeRequest('/port.delete', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/port.update', 'POST', data);
  }
}
