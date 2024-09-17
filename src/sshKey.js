// src/sshKey.js

import Api from '../utils/makeRequest.js';

export default class SSHKey extends Api {
  async create(data) {
    return this.makeRequest('/sshKey.create', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/sshKey.remove', 'POST', data);
  }

  async one(sshKeyId) {
    return this.makeRequest(`/sshKey.one?sshKeyId=${sshKeyId}`);
  }

  async all() {
    return this.makeRequest('/sshKey.all');
  }

  async generate(data) {
    return this.makeRequest('/sshKey.generate', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/sshKey.update', 'POST', data);
  }
}
