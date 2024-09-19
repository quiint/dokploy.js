// src/mariadb.js

import Api from '../utils/makeRequest.js';

export default class MariaDB extends Api {
    async create(
        name,
        appName,
        dockerImage = 'mariadb:6', // Default value
        databaseRootPassword,
        projectId,
        description = null, // Default value
        databaseName,
        databaseUser,
        databasePassword
      ) {
        return this.makeRequest('/mariadb.create', 'POST', {
          name,
          appName,
          dockerImage,
          databaseRootPassword,
          projectId,
          description,
          databaseName,
          databaseUser,
          databasePassword,
        });
      }
    
      async start(mariadbId) {
        return this.makeRequest('/mariadb.start', 'POST', { mariadbId });
      }
    
      async stop(mariadbId) {
        return this.makeRequest('/mariadb.stop', 'POST', { mariadbId });
      }
    
      async saveExternalPort(mariadbId, externalPort) {
        return this.makeRequest('/mariadb.saveExternalPort', 'POST', {
          mariadbId,
          externalPort,
        });
      }
    
      async deploy(mariadbId) {
        return this.makeRequest('/mariadb.deploy', 'POST', { mariadbId });
      }
    
      async changeStatus(mariadbId, applicationStatus) {
        return this.makeRequest('/mariadb.changeStatus', 'POST', {
          mariadbId,
          applicationStatus,
        });
      }
    
      async remove(mariadbId) {
        return this.makeRequest('/mariadb.remove', 'POST', { mariadbId });
      }
    
      async saveEnvironment(mariadbId, env) {
        return this.makeRequest('/mariadb.saveEnvironment', 'POST', {
          mariadbId,
          env,
        });
      }
    
      async reload(mariadbId, appName) {
        return this.makeRequest('/mariadb.reload', 'POST', {
          mariadbId,
          appName,
        });
      }
    
      async update(
        mariadbId,
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
        return this.makeRequest('/mariadb.update', 'POST', {
          mariadbId,
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
      
  async one(mariadbId) {
    return this.makeRequest(`/mariadb.one?mariadbId=${mariadbId}`);
  }
}
