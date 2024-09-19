// src/mounts.js

import Api from '../utils/makeRequest.js';

export default class Mounts extends Api {
    async create(
        type,
        hostPath,
        volumeName,
        content,
        mountPath,
        serviceType,
        filePath,
        serviceId
      ) {
        return this.makeRequest('/mounts.create', 'POST', {
          type,
          hostPath,
          volumeName,
          content,
          mountPath,
          serviceType,
          filePath,
          serviceId,
        });
      }
    
      async remove(mountId) {
        return this.makeRequest('/mounts.remove', 'POST', { mountId });
      }
    
      async update(
        mountId,
        type,
        hostPath,
        volumeName,
        filePath,
        content,
        serviceType,
        mountPath,
        applicationId,
        postgresId,
        mariadbId,
        mongoId,
        mysqlId,
        redisId,
        composeId
      ) {
        return this.makeRequest('/mounts.update', 'POST', {
          mountId,
          type,
          hostPath,
          volumeName,
          filePath,
          content,
          serviceType,
          mountPath,
          applicationId,
          postgresId,
          mariadbId,
          mongoId,
          mysqlId,
          redisId,
          composeId,
        });
      }

  async one(mountId) {
    return this.makeRequest(`/mounts.one?mountId=${mountId}`);
  }
}
