// src/admin.js

import Api from '../utils/makeRequest.js';

export default class Admin extends Api {
  async one() {
    return this.makeRequest('/admin.one');
  }

  async createUserInvitation(data) {
    return this.makeRequest('/admin.createUserInvitation', 'POST', data);
  }

  async removeUser(data) {
    return this.makeRequest('/admin.removeUser', 'POST', data);
  }

  async getUserByToken(token) {
    return this.makeRequest(`/admin.getUserByToken?token=${token}`);
  }

  async assignPermissions(data) {
    return this.makeRequest('/admin.assignPermissions', 'POST', data);
  }
}
