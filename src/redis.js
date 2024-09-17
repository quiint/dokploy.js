// src/redis.js

import Api from '../utils/makeRequest.js';

export default class Redis extends Api {
  async create(data) {
    return this.makeRequest('/redis.create', 'POST', data);
  }

  async one(redisId) {
    return this.makeRequest(`/redis.one?redisId=${redisId}`);
  }

  async start(data) {
    return this.makeRequest('/redis.start', 'POST', data);
  }

  async reload(data) {
    return this.makeRequest('/redis.reload', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/redis.stop', 'POST', data);
  }

  async saveExternalPort(data) {
    return this.makeRequest('/redis.saveExternalPort', 'POST', data);
  }

  async deploy(data) {
    return this.makeRequest('/redis.deploy', 'POST', data);
  }

  async changeStatus(data) {
    return this.makeRequest('/redis.changeStatus', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/redis.remove', 'POST', data);
  }

  async saveEnvironment(data) {
    return this.makeRequest('/redis.saveEnvironment', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/redis.update', 'POST', data);
  }
}
