// src/mounts.js

import Api from '../utils/makeRequest.js';

export default class Mounts extends Api {
  async create(data) {
    return this.makeRequest('/mounts.create', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/mounts.remove', 'POST', data);
  }

  async one(mountId) {
    return this.makeRequest(`/mounts.one?mountId=${mountId}`);
  }

  async update(data) {
    return this.makeRequest('/mounts.update', 'POST', data);
  }
}
