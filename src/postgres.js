// src/postgres.js

import Api from '../utils/makeRequest.js';

export default class Postgres extends Api {
    async create(
        name,
        appName,
        databaseName,
        databaseUser,
        databasePassword,
        dockerImage,
        projectId,
        description
      ) {
        return this.makeRequest('/postgres.create', 'POST', {
          name,
          appName,
          databaseName,
          databaseUser,
          databasePassword,
          dockerImage,
          projectId,
          description,
        });
      }

  async one(postgresId) {
    return this.makeRequest(`/postgres.one?postgresId=${postgresId}`);
  }

  async start(postgresId) {
    return this.makeRequest('/postgres.start', 'POST', { postgresId });
  }

  async stop(postgresId) {
    return this.makeRequest('/postgres.stop', 'POST', { postgresId });
  }

  async saveExternalPort(postgresId, externalPort) {
    return this.makeRequest('/postgres.saveExternalPort', 'POST', {
      postgresId,
      externalPort,
    });
  }

  async deploy(postgresId) {
    return this.makeRequest('/postgres.deploy', 'POST', { postgresId });
  }

  async changeStatus(postgresId, applicationStatus) {
    return this.makeRequest('/postgres.changeStatus', 'POST', {
      postgresId,
      applicationStatus,
    });
  }

  async remove(postgresId) {
    return this.makeRequest('/postgres.remove', 'POST', { postgresId });
  }

  async saveEnvironment(postgresId, env) {
    return this.makeRequest('/postgres.saveEnvironment', 'POST', {
      postgresId,
      env,
    });
  }

  async reload(postgresId, appName) {
    return this.makeRequest('/postgres.reload', 'POST', {
      postgresId,
      appName,
    });
  }

  async update(
    postgresId,
    name,
    appName,
    databaseName,
    databaseUser,
    databasePassword,
    description,
    dockerImage,
    command,
    env,
    memoryReservation,
    externalPort,
    memoryLimit,
    cpuReservation,
    cpuLimit,
    applicationStatus,
    createdAt,
    projectId
  ) {
    return this.makeRequest('/postgres.update', 'POST', {
      postgresId,
      name,
      appName,
      databaseName,
      databaseUser,
      databasePassword,
      description,
      dockerImage,
      command,
      env,
      memoryReservation,
      externalPort,
      memoryLimit,
      cpuReservation,
      cpuLimit,
      applicationStatus,
      createdAt,
      projectId,
    });
  }
}
