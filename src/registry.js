// src/registry.js

import Api from '../utils/makeRequest.js';

export default class Registry extends Api {
    async create(
        registryName,
        username,
        password,
        registryUrl,
        registryType,
        imagePrefix
      ) {
        return this.makeRequest('/registry.create', 'POST', {
          registryName,
          username,
          password,
          registryUrl,
          registryType,
          imagePrefix,
        });
      }
    
      async remove(registryId) {
        return this.makeRequest('/registry.remove', 'POST', { registryId });
      }
    
      async update(
        registryId,
        registryName,
        imagePrefix,
        username,
        password,
        registryUrl,
        createdAt,
        registryType,
        adminId 
      ) {
        return this.makeRequest('/registry.update', 'POST', {
          registryId,
          registryName,
          imagePrefix,
          username,
          password,
          registryUrl,
          createdAt,
          registryType,
          adminId,
        });
      }

  async all() {
    return this.makeRequest('/registry.all');
  }

  async one(registryId) {
    return this.makeRequest(`/registry.one?registryId=${registryId}`);
  }

  async testRegistry(
    registryName,
    username,
    password,
    registryUrl,
    registryType,
    imagePrefix
  ) {
    return this.makeRequest('/registry.testRegistry', 'POST', {
      registryName,
      username,
      password,
      registryUrl,
      registryType,
      imagePrefix, 
    });
  }

  async enableSelfHostedRegistry(registryUrl, username, password) {
    return this.makeRequest('/registry.enableSelfHostedRegistry', 'POST', {
      registryUrl,
      username,
      password,
    });
  }
}


