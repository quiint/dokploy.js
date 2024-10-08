// src/cluster.js

import Api from '../utils/makeRequest.js';

export default class Cluster extends Api {
  async getNodes() {
    return this.makeRequest('/cluster.getNodes');
  }

  async removeWorker(nodeId) {
    return this.makeRequest('/cluster.removeWorker', 'POST', { nodeId });
  }

  async addWorker() {
    return this.makeRequest('/cluster.addWorker');
  }

  async addManager() {
    return this.makeRequest('/cluster.addManager');
  }
}
