// src/redis.js

import Api from '../utils/makeRequest.js';

export default class Redis extends Api {
    async create(name, appName, databasePassword, dockerImage, projectId, description) {
        return this.makeRequest('/redis.create', 'POST', {
          name,
          appName,
          databasePassword,
          dockerImage,
          projectId,
          description,
        });
      }
    
      async start(redisId) {
        return this.makeRequest('/redis.start', 'POST', { redisId });
      }
    
      async reload(redisId, appName) {
        return this.makeRequest('/redis.reload', 'POST', { redisId, appName });
      }
    
      async stop(redisId) {
        return this.makeRequest('/redis.stop', 'POST', { redisId });
      }
    
      async saveExternalPort(redisId, externalPort) {
        return this.makeRequest('/redis.saveExternalPort', 'POST', {
          redisId,
          externalPort,
        });
      }
    
      async deploy(redisId) {
        return this.makeRequest('/redis.deploy', 'POST', { redisId });
      }
    
      async changeStatus(redisId, applicationStatus) {
        return this.makeRequest('/redis.changeStatus', 'POST', {
          redisId,
          applicationStatus,
        });
      }
    
      async remove(redisId) {
        return this.makeRequest('/redis.remove', 'POST', { redisId });
      }
    
      async saveEnvironment(redisId, env) {
        return this.makeRequest('/redis.saveEnvironment', 'POST', {
          redisId,
          env,
        });
      }
    
      async update(
        redisId,
        name,
        appName,
        description,
        databasePassword,
        dockerImage,
        command,
        env,
        memoryReservation,
        memoryLimit,
        cpuReservation,
        cpuLimit,
        externalPort,
        createdAt,
        applicationStatus,
        projectId
      ) {
        return this.makeRequest('/redis.update', 'POST', {
          redisId,
          name,
          appName,
          description,
          databasePassword,
          dockerImage,
          command,
          env,
          memoryReservation,
          memoryLimit,
          cpuReservation,
          cpuLimit,
          externalPort,
          createdAt,
          applicationStatus,
          projectId,
        });
      }
      

  async one(redisId) {
    return this.makeRequest(`/redis.one?redisId=${redisId}`);
  }

}
