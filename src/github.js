// src/github.js

import Api from '../utils/makeRequest.js';

export default class Github extends Api {
  async one(githubId) {
    return this.makeRequest(`/github.one?githubId=${githubId}`);
  }

  async getGithubRepositories(githubId) {
    return this.makeRequest(`/github.getGithubRepositories?githubId=${githubId}`);
  }

  async getGithubBranches(repo, owner, githubId) {
    let url = `/github.getGithubBranches?owner=${owner}&repo=${repo}`;
    if (githubId) {
      url += `&githubId=${githubId}`;
    }
    return this.makeRequest(url);
  }

  async githubProviders() {
    return this.makeRequest('/github.githubProviders');
  }

  async testConnection(data) {
    return this.makeRequest('/github.testConnection', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/github.update', 'POST', data);
  }
}
