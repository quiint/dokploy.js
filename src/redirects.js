// src/redirects.js

import Api from '../utils/makeRequest.js';

export default class Redirects extends Api {
    async create(regex, replacement, permanent, applicationId) {
        return this.makeRequest('/redirects.create', 'POST', {
          regex,
          replacement,
          permanent,
          applicationId,
        });
      }

  async one(redirectId) {
    return this.makeRequest(`/redirects.one?redirectId=${redirectId}`);
  }

  async delete(redirectId) {
    return this.makeRequest('/redirects.delete', 'POST', { redirectId });
  }

  async update(redirectId, regex, replacement, permanent) {
    return this.makeRequest('/redirects.update', 'POST', {
      redirectId,
      regex,
      replacement,
      permanent,
    });
  }
}
