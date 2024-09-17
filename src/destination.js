// src/destination.js

import Api from '../utils/makeRequest.js';

export default class Destination extends Api {
  async create(data) {
    return this.makeRequest('/destination.create', 'POST', data);
  }

  async testConnection(data) {
    return this.makeRequest('/destination.testConnection', 'POST', data);
  }

  async one(destinationId) {
    return this.makeRequest(`/destination.one?destinationId=${destinationId}`);
  }

  async all() {
    return this.makeRequest('/destination.all');
  }

  async remove(data) {
    return this.makeRequest('/destination.remove', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/destination.update', 'POST', data);
  }
}
