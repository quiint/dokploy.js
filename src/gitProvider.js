// src/gitProvider.js

import Api from '../utils/makeRequest.js';

export default class GitProvider extends Api {
  async getAll() {
    return this.makeRequest('/gitProvider.getAll');
  }

  async remove(gitProviderId) {
    return this.makeRequest('/gitProvider.remove', 'POST', { gitProviderId });
  }
}
