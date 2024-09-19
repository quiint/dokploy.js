// src/backup.js

import Api from '../utils/makeRequest.js';

export default class Backup extends Api {
    async create(
        schedule,
        enabled,
        prefix,
        destinationId,
        database,
        mariadbId,
        mysqlId,
        postgresId,
        mongoId,
        databaseType
      ) {
        return this.makeRequest('/backup.create', 'POST', {
          schedule,
          enabled,
          prefix,
          destinationId,
          database,
          mariadbId,
          mysqlId,
          postgresId,
          mongoId,
          databaseType,
        });
      }
    
      async update(schedule, enabled, prefix, backupId, destinationId, database) {
        return this.makeRequest('/backup.update', 'POST', {
          schedule,
          enabled,
          prefix,
          backupId,
          destinationId,
          database,
        });
      }

  async one(backupId) {
    return this.makeRequest(`/backup.one?backupId=${backupId}`);
  }

  async remove(backupId) {
    return this.makeRequest('/backup.remove', 'POST', { backupId });
  }

  async manualBackupPostgres(backupId) {
    return this.makeRequest('/backup.manualBackupPostgres', 'POST', {
      backupId,
    });
  }

  async remove(backupId) {
    return this.makeRequest('/backup.remove', 'POST', { backupId });
  }

  async manualBackupPostgres(backupId) {
    return this.makeRequest('/backup.manualBackupPostgres', 'POST', {
      backupId,
    });
  }
}
