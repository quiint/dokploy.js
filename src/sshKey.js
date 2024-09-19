// src/sshKey.js

import Api from '../utils/makeRequest.js';

export default class SSHKey extends Api {
    async create(name, description, publicKey, privateKey) {
        return this.makeRequest('/sshKey.create', 'POST', {
          name,
          description,
          publicKey,
          privateKey,
        });
      }
    
      async remove(sshKeyId) {
        return this.makeRequest('/sshKey.remove', 'POST', { sshKeyId });
      }

  async one(sshKeyId) {
    return this.makeRequest(`/sshKey.one?sshKeyId=${sshKeyId}`);
  }

  async all() {
    return this.makeRequest('/sshKey.all');
  }

  async generate(type) { 
    return this.makeRequest('/sshKey.generate', 'POST', { type });
  }

  async update(name, description, lastUsedAt, sshKeyId) {
    return this.makeRequest('/sshKey.update', 'POST', {
      name,
      description,
      lastUsedAt,
      sshKeyId,
    });
  }
}
