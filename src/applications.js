// src/applications.js

import Api from '../utils/makeRequest.js';

export default class Applications extends Api {
    async create(name, appName, description, projectId) {
        return this.makeRequest('/application.create', 'POST', {
          name,
          appName,
          description,
          projectId,
        });
      }
    
      async reload(appName, applicationId) {
        return this.makeRequest('/application.reload', 'POST', {
          appName,
          applicationId,
        });
      }
    

  async one(applicationId) {
    return this.makeRequest(`/application.one?applicationId=${applicationId}`);
  }

  async delete(applicationId) {
    return this.makeRequest('/application.delete', 'POST', { applicationId });
  }

  async stop(applicationId) {
    return this.makeRequest('/application.stop', 'POST', { applicationId });
  }

  async start(applicationId) {
    return this.makeRequest('/application.start', 'POST', { applicationId });
  }

  async redeploy(applicationId) {
    return this.makeRequest('/application.redeploy', 'POST', { applicationId });
  }

  async saveEnvironment(applicationId, env, buildArgs) {
    return this.makeRequest('/application.saveEnvironment', 'POST', {
      applicationId,
      env,
      buildArgs,
    });
  }

  async saveBuildType(
    applicationId,
    buildType,
    dockerfile,
    dockerContextPath,
    publishDirectory
  ) {
    return this.makeRequest('/application.saveBuildType', 'POST', {
      applicationId,
      buildType,
      dockerfile,
      dockerContextPath,
      publishDirectory,
    });
  }

  async saveGithubProvider(
    applicationId,
    repository,
    branch,
    owner,
    buildPath,
    githubId
  ) {
    return this.makeRequest('/application.saveGithubProvider', 'POST', {
      applicationId,
      repository,
      branch,
      owner,
      buildPath,
      githubId,
    });
  }

  async saveGitlabProvider(
    applicationId,
    gitlabBranch,
    gitlabBuildPath,
    gitlabOwner,
    gitlabRepository,
    gitlabId,
    gitlabProjectId,
    gitlabPathNamespace
  ) {
    return this.makeRequest('/application.saveGitlabProvider', 'POST', {
      applicationId,
      gitlabBranch,
      gitlabBuildPath,
      gitlabOwner,
      gitlabRepository,
      gitlabId,
      gitlabProjectId,
      gitlabPathNamespace,
    });
  }

  async saveBitbucketProvider(
    bitbucketBranch,
    bitbucketBuildPath,
    bitbucketOwner,
    bitbucketRepository,
    bitbucketId,
    applicationId
  ) {
    return this.makeRequest('/application.saveBitbucketProvider', 'POST', {
      bitbucketBranch,
      bitbucketBuildPath,
      bitbucketOwner,
      bitbucketRepository,
      bitbucketId,
      applicationId,
    });
  }

  async saveDockerProvider(
    dockerImage,
    applicationId,
    username,
    password
  ) {
    return this.makeRequest('/application.saveDockerProvider', 'POST', {
      dockerImage,
      applicationId,
      username,
      password,
    });
  }

  async saveGitProvider(
    customGitBranch,
    applicationId,
    customGitBuildPath,
    customGitUrl,
    customGitSSHKeyId
  ) {
    return this.makeRequest('/application.saveGitProdiver', 'POST', {
      customGitBranch,
      applicationId,
      customGitBuildPath,
      customGitUrl,
      customGitSSHKeyId,
    });
  }

  async markRunning(applicationId) {
    return this.makeRequest('/application.markRunning', 'POST', { applicationId });
  }
  

  async update(
    applicationId,
    name,
    appName,
    description,
    env,
    buildArgs,
    memoryReservation,
    memoryLimit,
    cpuReservation,
    cpuLimit,
    title,
    enabled,
    subtitle,
    command,
    refreshToken,
    sourceType,
    repository,
    owner,
    branch,
    buildPath,
    autoDeploy,
    gitlabProjectId,
    gitlabRepository,
    gitlabOwner,
    gitlabBranch,
    gitlabBuildPath,
    gitlabPathNamespace,
    bitbucketRepository,
    bitbucketOwner,
    bitbucketBranch,
    bitbucketBuildPath,
    username,
    password,
    dockerImage,
    customGitUrl,
    customGitBranch,
    customGitBuildPath,
    customGitSSHKeyId,
    dockerfile,
    dockerContextPath,
    dropBuildPath,
    healthCheckSwarm,
    restartPolicySwarm,
    placementSwarm,
    updateConfigSwarm,
    rollbackConfigSwarm,
    modeSwarm,
    labelsSwarm,
    networkSwarm,
    replicas,
    applicationStatus,
    buildType,
    publishDirectory,
    createdAt,
    registryId,
    projectId,
    githubId,
    gitlabId,
    bitbucketId
  ) {
    return this.makeRequest('/application.update', 'POST', {
      applicationId,
      name,
      appName,
      description,
      env,
      buildArgs,
      memoryReservation,
      memoryLimit,
      cpuReservation,
      cpuLimit,
      title,
      enabled,
      subtitle,
      command,
      refreshToken,
      sourceType,
      repository,
      owner,
      branch,
      buildPath,
      autoDeploy,
      gitlabProjectId,
      gitlabRepository,
      gitlabOwner,
      gitlabBranch,
      gitlabBuildPath,
      gitlabPathNamespace,
      bitbucketRepository,
      bitbucketOwner,
      bitbucketBranch,
      bitbucketBuildPath,
      username,
      password,
      dockerImage,
      customGitUrl,
      customGitBranch,
      customGitBuildPath,
      customGitSSHKeyId,
      dockerfile,
      dockerContextPath,
      dropBuildPath,
      healthCheckSwarm,
      restartPolicySwarm,
      placementSwarm,
      updateConfigSwarm,
      rollbackConfigSwarm,
      modeSwarm,
      labelsSwarm,
      networkSwarm,
      replicas,
      applicationStatus,
      buildType,
      publishDirectory,
      createdAt,
      registryId,
      projectId,
      githubId,
      gitlabId,
      bitbucketId,
    });
  }

  async refreshToken(applicationId) {
    return this.makeRequest('/application.refreshToken', 'POST', { applicationId });
  }

  async deploy(applicationId) {
    return this.makeRequest('/application.deploy', 'POST', { applicationId });
  }

  async cleanQueues(applicationId) {
    return this.makeRequest('/application.cleanQueues', 'POST', { applicationId });
  }

  async updateTraefikConfig(applicationId, traefikConfig) {
    return this.makeRequest('/application.updateTraefikConfig', 'POST', {
      applicationId,
      traefikConfig,
    });
  }


  async readTraefikConfig(applicationId) {
    return this.makeRequest(`/application.readTraefikConfig?applicationId=${applicationId}`);
  }

  async readAppMonitoring(appName) {
    return this.makeRequest(`/application.readAppMonitoring?appName=${appName}`);
  }
}
