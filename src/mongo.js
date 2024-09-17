// src/mongo.js

import Api from '../utils/makeRequest.js';

export default class Mongo extends Api {
  async create(data) {
    return this.makeRequest('/mongo.create', 'POST', data);
  }

  async one(mongoId) {
    return this.makeRequest(`/mongo.one?mongoId=${mongoId}`);
  }

  async start(data) {
    return this.makeRequest('/mongo.start', 'POST', data);
  }

  async stop(data) {
    return this.makeRequest('/mongo.stop', 'POST', data);
  }

  async saveExternalPort(data) {
    return this.makeRequest('/mongo.saveExternalPort', 'POST', data);
  }

  async deploy(data) {
    return this.makeRequest('/mongo.deploy', 'POST', data);
  }

  async changeStatus(data) {
    return this.makeRequest('/mongo.changeStatus', 'POST', data);
  }

  async reload(data) {
    return this.makeRequest('/mongo.reload', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/mongo.remove', 'POST', data);
  }

  async saveEnvironment(data) {
    return this.makeRequest('/mongo.saveEnvironment', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/mongo.update', 'POST', data);
  }
}
