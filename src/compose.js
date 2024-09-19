// src/compose.js

import Api from '../utils/makeRequest.js';

export default class Compose extends Api {
    async create(name, description, projectId, composeType, appName) {
        return this.makeRequest('/compose.create', 'POST', {
          name,
          description,
          projectId,
          composeType,
          appName,
        });
      }

  async one(composeId) {
    return this.makeRequest(`/compose.one?composeId=${composeId}`);
  }

  async update(
    composeId,
    name,
    appName,
    description,
    env,
    composeFile,
    refreshToken,
    sourceType,
    composeType,
    repository,
    owner,
    branch,
    autoDeploy,
    gitlabProjectId,
    gitlabRepository,
    gitlabOwner,
    gitlabBranch,
    gitlabPathNamespace,
    bitbucketRepository,
    bitbucketOwner,
    bitbucketBranch,
    customGitUrl,
    customGitBranch,
    customGitSSHKeyId,
    command,
    composePath,
    composeStatus,
    projectId,
    createdAt,
    githubId,
    gitlabId,
    bitbucketId
  ) {
    return this.makeRequest('/compose.update', 'POST', {
      composeId,
      name,
      appName,
      description,
      env,
      composeFile,
      refreshToken,
      sourceType,
      composeType,
      repository,
      owner,
      branch,
      autoDeploy,
      gitlabProjectId,
      gitlabRepository,
      gitlabOwner,
      gitlabBranch,
      gitlabPathNamespace,
      bitbucketRepository,
      bitbucketOwner,
      bitbucketBranch,
      customGitUrl,
      customGitBranch,
      customGitSSHKeyId,
      command,
      composePath,
      composeStatus,
      projectId,
      createdAt,
      githubId,
      gitlabId,
      bitbucketId,
    });
  }
  
  async delete(composeId) {
    return this.makeRequest('/compose.delete', 'POST', { composeId });
  }

  async cleanQueues(composeId) {
    return this.makeRequest('/compose.cleanQueues', 'POST', { composeId });
  }

  async loadServices(composeId, type = 'cache') {
    return this.makeRequest(`/compose.loadServices?composeId=${composeId}&type=${type}`);
  }

  async fetchSourceType(composeId) {
    return this.makeRequest('/compose.fetchSourceType', 'POST', {
      composeId,
    });
  }

  async randomizeCompose(composeId, prefix) {
    return this.makeRequest('/compose.randomizeCompose', 'POST', {
      composeId,
      prefix,
    });
  }

  async getConvertedCompose(composeId) {
    return this.makeRequest(`/compose.getConvertedCompose?composeId=${composeId}`);
  }

  async deploy(composeId) {
    return this.makeRequest('/compose.deploy', 'POST', { composeId });
  }

  async redeploy(composeId) {
    return this.makeRequest('/compose.redeploy', 'POST', { composeId });
  }

  async stop(composeId) {
    return this.makeRequest('/compose.stop', 'POST', { composeId });
  }


  async getDefaultCommand(composeId) {
    return this.makeRequest(`/compose.getDefaultCommand?composeId=${composeId}`);
  }

  async refreshToken(composeId) {
    return this.makeRequest('/compose.refreshToken', 'POST', { composeId });
  }

  async deployTemplate(projectId, id) {
    return this.makeRequest('/compose.deployTemplate', 'POST', {
      projectId,
      id,
    });
  }

  async templates() {
    return this.makeRequest('/compose.templates');
  }

  async getTags() {
    return this.makeRequest('/compose.getTags');
  }
}
