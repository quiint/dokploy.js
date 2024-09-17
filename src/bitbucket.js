// src/bitbucket.js

import Api from '../utils/makeRequest.js';

export default class Bitbucket extends Api {
  async create(data) {
    return this.makeRequest('/bitbucket.create', 'POST', data);
  }

  async one(bitbucketId) {
    return this.makeRequest(`/bitbucket.one?bitbucketId=${bitbucketId}`);
  }

  async bitbucketProviders() {
    return this.makeRequest('/bitbucket.bitbucketProviders');
  }

  async getBitbucketRepositories(bitbucketId) {
    return this.makeRequest(`/bitbucket.getBitbucketRepositories?bitbucketId=${bitbucketId}`);
  }

  async getBitbucketBranches(owner, repo, bitbucketId) {
    let url = `/bitbucket.getBitbucketBranches?owner=${owner}&repo=${repo}`;
    if (bitbucketId) {
      url += `&bitbucketId=${bitbucketId}`;
    }
    return this.makeRequest(url);
  }

  async testConnection(data) {
    return this.makeRequest('/bitbucket.testConnection', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/bitbucket.update', 'POST', data);
  }
}
