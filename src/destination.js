// src/destination.js

import Api from '../utils/makeRequest.js';

export default class Destination extends Api {
    async create(
        name,
        accessKey,
        bucket,
        region,
        endpoint,
        secretAccessKey
      ) {
        return this.makeRequest('/destination.create', 'POST', {
          name,
          accessKey,
          bucket,
          region,
          endpoint,
          secretAccessKey,
        });
      }
    
      async testConnection(
        name,
        accessKey,
        bucket,
        region,
        endpoint,
        secretAccessKey
      ) {
        return this.makeRequest('/destination.testConnection', 'POST', {
          name,
          accessKey,
          bucket,
          region,
          endpoint,
          secretAccessKey,
        });
      }
    

  async one(destinationId) {
    return this.makeRequest(`/destination.one?destinationId=${destinationId}`);
  }

  async all() {
    return this.makeRequest('/destination.all');
  }

  async remove(destinationId) {
    return this.makeRequest('/destination.remove', 'POST', { destinationId });
  }

  async update(
    name,
    accessKey,
    bucket,
    region,
    endpoint,
    secretAccessKey,
    destinationId
  ) {
    return this.makeRequest('/destination.update', 'POST', {
      name,
      accessKey,
      bucket,
      region,
      endpoint,
      secretAccessKey,
      destinationId,
    });
  }
}
