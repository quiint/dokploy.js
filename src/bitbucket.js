// src/bitbucket.js

import Api from '../utils/makeRequest.js';

export default class Bitbucket extends Api {
    async create(
        bitbucketId,
        bitbucketUsername,
        appPassword,
        bitbucketWorkspaceName,
        gitProviderId,
        authId,
        name
      ) {
        return this.makeRequest('/bitbucket.create', 'POST', {
          bitbucketId,
          bitbucketUsername,
          appPassword,
          bitbucketWorkspaceName, 
          gitProviderId,
          authId,
          name,
        });
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

  async testConnection(bitbucketId, bitbucketUsername, workspaceName) {
    return this.makeRequest('/bitbucket.testConnection', 'POST', {
      bitbucketId,
      bitbucketUsername,
      workspaceName,
    });
  }

  async update(
    bitbucketId,
    bitbucketUsername,
    appPassword,
    bitbucketWorkspaceName,
    gitProviderId,
    name
  ) {
    return this.makeRequest('/bitbucket.update', 'POST', {
      bitbucketId,
      bitbucketUsername,
      appPassword,
      bitbucketWorkspaceName,
      gitProviderId,
      name,
    });
  }
}
