// src/domain.js

import Api from '../utils/makeRequest.js';

export default class Domain extends Api {
    async create(
        host,
        path,
        port,
        https,
        applicationId,
        certificateType,
        composeId,
        serviceName,
        domainType
      ) {
        return this.makeRequest('/domain.create', 'POST', {
          host,
          path,
          port,
          https,
          applicationId,
          certificateType,
          composeId,
          serviceName,
          domainType,
        });
      }
    
      async generateDomain(appName) {
        return this.makeRequest('/domain.generateDomain', 'POST', { appName });
      }
    
      async update(
        host,
        path,
        port,
        https,
        certificateType,
        serviceName,
        domainType,
        domainId
      ) {
        return this.makeRequest('/domain.update', 'POST', {
          host,
          path,
          port,
          https,
          certificateType,
          serviceName,
          domainType,
          domainId,
        });
      }
    
      async delete(domainId) {
        return this.makeRequest('/domain.delete', 'POST', { domainId });
      }

  async byApplicationId(applicationId) {
    return this.makeRequest(`/domain.byApplicationId?applicationId=${applicationId}`);
  }

  async byComposeId(composeId) {
    return this.makeRequest(`/domain.byComposeId?composeId=${composeId}`);
  }

  async one(domainId) {
    return this.makeRequest(`/domain.one?domainId=${domainId}`);
  }

}
