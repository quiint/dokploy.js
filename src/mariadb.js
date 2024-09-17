// src/mariadb.js

import Api from '../utils/makeRequest.js';

export default class MariaDB extends Api {
  async create(data) {
    return this.makeRequest('/mariadb.create', 'POST', data);
  }

  async one(mariadbId) {
    return this.makeRequest(`/mariadb.one?mariadbId=${mariadbId}`);
  }

  async start(data) {
    return this.makeRequest('/mariadb.start', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/mariadb.stop', 'POST', data);
  }

  async saveExternalPort(data) {
    return this.makeRequest('/mariadb.saveExternalPort', 'POST', data);
  }

  async deploy(data) {
    return this.makeRequest('/mariadb.deploy', 'POST', data);
  }

  async changeStatus(data) {
    return this.makeRequest('/mariadb.changeStatus', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/mariadb.remove', 'POST', data);
  }

  async saveEnvironment(data) {
    return this.makeRequest('/mariadb.saveEnvironment', 'POST', data);
  }

  async reload(data) {
    return this.makeRequest('/mariadb.reload', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/mariadb.update', 'POST', data);
  }
}
