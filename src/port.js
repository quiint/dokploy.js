// src/port.js

import Api from '../utils/makeRequest.js';

export default class Port extends Api {
    async create(publishedPort, targetPort, protocol, applicationId) {
        return this.makeRequest('/port.create', 'POST', {
          publishedPort,
          targetPort,
          protocol,
          applicationId,
        });
      }
    
      async delete(portId) {
        return this.makeRequest('/port.delete', 'POST', { portId });
      }
    
      async update(portId, publishedPort, targetPort, protocol) {
        return this.makeRequest('/port.update', 'POST', {
          portId,
          publishedPort,
          targetPort,
          protocol,
        });
      }

  async one(portId) {
    return this.makeRequest(`/port.one?portId=${portId}`);
  }
}
