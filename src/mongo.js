// src/mongo.js

import Api from '../utils/makeRequest.js';

export default class Mongo extends Api {
    async create(
        name,
        appName,
        dockerImage,
        projectId,
        description,
        databaseUser,
        databasePassword
      ) {
        return this.makeRequest('/mongo.create', 'POST', {
          name,
          appName,
          dockerImage,
          projectId,
          description,
          databaseUser,
          databasePassword,
        });
      }

  async one(mongoId) {
    return this.makeRequest(`/mongo.one?mongoId=${mongoId}`);
  }

  async start(mongoId) {
    return this.makeRequest('/mongo.start', 'POST', { mongoId });
  }

  async stop(mongoId) {
    return this.makeRequest('/mongo.stop', 'POST', { mongoId });
  }

  async saveExternalPort(mongoId, externalPort) {
    return this.makeRequest('/mongo.saveExternalPort', 'POST', {
      mongoId,
      externalPort,
    });
  }

  async deploy(mongoId) {
    return this.makeRequest('/mongo.deploy', 'POST', { mongoId });
  }

  async changeStatus(mongoId, applicationStatus) {
    return this.makeRequest('/mongo.changeStatus', 'POST', {
      mongoId,
      applicationStatus,
    });
  }

  async reload(mongoId, appName) {
    return this.makeRequest('/mongo.reload', 'POST', { mongoId, appName });
  }

  async remove(mongoId) {
    return this.makeRequest('/mongo.remove', 'POST', { mongoId });
  }

  async saveEnvironment(mongoId, env) {
    return this.makeRequest('/mongo.saveEnvironment', 'POST', {
      mongoId,
      env,
    });
  }

  async update(
    mongoId,
    name,
    appName,
    description,
    databaseUser,
    databasePassword,
    dockerImage,
    command,
    env,
    memoryReservation,
    memoryLimit,
    cpuReservation,
    cpuLimit,
    externalPort,
    applicationStatus,
    createdAt,
    projectId
  ) {
    return this.makeRequest('/mongo.update', 'POST', {
      mongoId,
      name,
      appName,
      description,
      databaseUser,
      databasePassword,
      dockerImage,
      command,
      env,
      memoryReservation,
      memoryLimit,
      cpuReservation,
      cpuLimit,
      externalPort,
      applicationStatus,
      createdAt,
      projectId,
    });
  }
}
