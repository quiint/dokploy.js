// src/postgres.js

import Api from '../utils/makeRequest.js';

export default class Postgres extends Api {
  async create(data) {
    return this.makeRequest('/postgres.create', 'POST', data);
  }

  async one(postgresId) {
    return this.makeRequest(`/postgres.one?postgresId=${postgresId}`);
  }

  async start(data) {
    return this.makeRequest('/postgres.start', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/postgres.stop', 'POST', data);
  }

  async saveExternalPort(data) {
    return this.makeRequest('/postgres.saveExternalPort', 'POST', data);
  }

  async deploy(data) {
    return this.makeRequest('/postgres.deploy', 'POST', data);
  }

  async changeStatus(data) {
    return this.makeRequest('/postgres.changeStatus', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/postgres.remove', 'POST', data);
  }

  async saveEnvironment(data) {
    return this.makeRequest('/postgres.saveEnvironment', 'POST', data);
  }

  async reload(data) {
    return this.makeRequest('/postgres.reload', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/postgres.update', 'POST', data);
  }
}
