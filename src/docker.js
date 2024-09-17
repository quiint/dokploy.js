// src/docker.js

import Api from '../utils/makeRequest.js';

export default class Docker extends Api {
  async getContainers() {
    return this.makeRequest('/docker.getContainers');
  }

  async getConfig(containerId) {
    return this.makeRequest(`/docker.getConfig?containerId=${containerId}`);
  }

  async getContainersByAppNameMatch(appName, appType) {
    let url = `/docker.getContainersByAppNameMatch?appName=${appName}`;
    if (appType) {
      url += `&appType=${appType}`;
    }
    return this.makeRequest(url);
  }

  async getContainersByAppLabel(appName) {
    return this.makeRequest(`/docker.getContainersByAppLabel?appName=${appName}`);
  }
}
