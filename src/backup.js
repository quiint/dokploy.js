// src/backup.js

import Api from '../utils/makeRequest.js';

export default class Backup extends Api {
  async create(data) {
    return this.makeRequest('/backup.create', 'POST', data);
  }

  async one(backupId) {
    return this.makeRequest(`/backup.one?backupId=${backupId}`);
  }

  async update(data) {
    return this.makeRequest('/backup.update', 'POST', data);
  }

  async remove(data) {
    return this.makeRequest('/backup.remove', 'POST', data);
  }

  async manualBackupPostgres(data) {
    return this.makeRequest('/backup.manualBackupPostgres', 'POST', data);
  }

  async manualBackupMySql(data) {
    return this.makeRequest('/backup.manualBackupMySql', 'POST', data);
  }

  async manualBackupMariadb(data) {
    return this.makeRequest('/backup.manualBackupMariadb', 'POST', data);
  }

  async manualBackupMongo(data) {
    return this.makeRequest('/backup.manualBackupMongo', 'POST', data);
  }
}
