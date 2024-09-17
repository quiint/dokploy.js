// src/gitlab.js

import Api from '../utils/makeRequest.js';

export default class Gitlab extends Api {
  async create(data) {
    return this.makeRequest('/gitlab.create', 'POST', data);
  }

  async one(gitlabId) {
    return this.makeRequest(`/gitlab.one?gitlabId=${gitlabId}`);
  }

  async gitlabProviders() {
    return this.makeRequest('/gitlab.gitlabProviders');
  }

  async getGitlabRepositories(gitlabId) {
    return this.makeRequest(`/gitlab.getGitlabRepositories?gitlabId=${gitlabId}`);
  }

  async getGitlabBranches(owner, repo, id, gitlabId) {
    let url = `/gitlab.getGitlabBranches?owner=${owner}&repo=${repo}`;
    if (id) {
      url += `&id=${id}`;
    }
    if (gitlabId) {
      url += `&gitlabId=${gitlabId}`;
    }
    return this.makeRequest(url);
  }

  async testConnection(data) {
    return this.makeRequest('/gitlab.testConnection', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/gitlab.update', 'POST', data);
  }
}
