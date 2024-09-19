// src/mysql.js

import Api from '../utils/makeRequest.js';

export default class MySQL extends Api {
  async create(
    name,
    appName,
    dockerImage,
    projectId,
    description,
    databaseName,
    databaseUser,
    databasePassword,
    databaseRootPassword
  ) {
    return this.makeRequest('/mysql.create', 'POST', {
      name,
      appName,
      dockerImage,
      projectId,
      description,
      databaseName,
      databaseUser,
      databasePassword,
      databaseRootPassword,
    });
  }

  async start(mysqlId) {
    return this.makeRequest('/mysql.start', 'POST', { mysqlId });
  }

  async stop(mysqlId) {
    return this.makeRequest('/mysql.stop', 'POST', { mysqlId });
  }

  async one(mysqlId) {
    return this.makeRequest(`/mysql.one?mysqlId=${mysqlId}`);
  }


  async saveExternalPort(mysqlId, externalPort) {
    return this.makeRequest('/mysql.saveExternalPort', 'POST', {
      mysqlId,
      externalPort,
    });
  }


  async deploy(mysqlId) {
    return this.makeRequest('/mysql.deploy', 'POST', { mysqlId });
  }

  async changeStatus(mysqlId, applicationStatus) {
    return this.makeRequest('/mysql.changeStatus', 'POST', {
      mysqlId,
      applicationStatus,
    });
  }
  async reload(mysqlId, appName) {
    return this.makeRequest('/mysql.reload', 'POST', { mysqlId, appName });
  }

  async remove(mysqlId) {
    return this.makeRequest('/mysql.remove', 'POST', { mysqlId });
  }

  async saveEnvironment(mysqlId, env) {
    return this.makeRequest('/mysql.saveEnvironment', 'POST', {
      mysqlId,
      env,
    });
  }

  async update(
    mysqlId,
    name,
    appName,
    description,
    databaseName,
    databaseUser,
    databasePassword,
    databaseRootPassword,
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
    return this.makeRequest('/mysql.update', 'POST', {
      mysqlId,
      name,
      appName,
      description,
      databaseName,
      databaseUser,
      databasePassword,
      databaseRootPassword,
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
