// src/certificates.js

import Api from '../utils/makeRequest.js';

export default class Certificates extends Api {
    async create(certificateId, name, certificateData, privateKey, certificatePath, autoRenew) {
        return this.makeRequest('/certificates.create', 'POST', {
          certificateId,
          name,
          certificateData,
          privateKey,
          certificatePath,
          autoRenew,
        });
      }
    
      async remove(certificateId) {
        return this.makeRequest('/certificates.remove', 'POST', { certificateId });
      }

  async one(certificateId) {
    return this.makeRequest(`/certificates.one?certificateId=${certificateId}`);
  }

  async all() {
    return this.makeRequest('/certificates.all');
  }
}
