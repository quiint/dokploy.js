// src/gitlab.js

import Api from '../utils/makeRequest.js';

export default class Gitlab extends Api {
    async create(
        gitlabId,
        applicationId,
        redirectUri,
        secret,
        accessToken,
        refreshToken,
        groupName,
        expiresAt,
        gitProviderId,
        authId,
        name
      ) {
        return this.makeRequest('/gitlab.create', 'POST', {
          gitlabId,
          applicationId,
          redirectUri,
          secret,
          accessToken,
          refreshToken,
          groupName,
          expiresAt,
          gitProviderId,
          authId,
          name,
        });
      }
    
      async testConnection(gitlabId, groupName) {
        return this.makeRequest('/gitlab.testConnection', 'POST', {
          gitlabId,
          groupName,
        });
      }
    
      async update(
        gitlabId,
        applicationId,
        redirectUri,
        secret,
        accessToken,
        refreshToken,
        groupName,
        expiresAt,
        gitProviderId,
        name
      ) {
        return this.makeRequest('/gitlab.update', 'POST', {
          gitlabId,
          applicationId,
          redirectUri,
          secret,
          accessToken,
          refreshToken,
          groupName,
          expiresAt,
          gitProviderId,
          name,
        });
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
}
