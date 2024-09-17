// src/mysql.js

import Api from '../utils/makeRequest.js';

export default class MySQL extends Api {
  async create(data) {
    return this.makeRequest('/mysql.create', 'POST', data);
  }

  async one(mysqlId) {
    return this.makeRequest(`/mysql.one?mysqlId=${mysqlId}`);
  }

  async start(data) {
    return this.makeRequest('/mysql.start', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/mysql.stop', 'POST', data);
  }

  async saveExternalPort(data) {
    return this.makeRequest('/mysql.saveExternalPort', 'POST', data);
  }

  async deploy(data) {
    return this.makeRequest('/mysql.deploy', 'POST', data);
  }

  async changeStatus(data) {
    return this.makeRequest('/mysql.changeStatus', 'POST', data);
  }

  async reload(data) {
    return this.makeRequest('/mysql.reload', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/mysql.remove', 'POST', data);
  }

  async saveEnvironment(data) {
    return this.makeRequest('/mysql.saveEnvironment', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/mysql.update', 'POST', data);
  }
}
