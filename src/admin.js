// src/admin.js

import Api from '../utils/makeRequest.js';

export default class Admin extends Api {
  async one() {
    return this.makeRequest('/admin.one');
  }

  async createUserInvitation(data) {
    return this.makeRequest('/admin.createUserInvitation', 'POST', { email });
  }

  async removeUser(data) {
    return this.makeRequest('/admin.removeUser', 'POST', { authId });
  }

  async getUserByToken(token) {
    return this.makeRequest(`/admin.getUserByToken?token=${token}`);
  }

  async assignPermissions(
    userId,
    canCreateProjects,
    canCreateServices,
    canDeleteProjects,
    canDeleteServices,
    accesedProjects,
    accesedServices,
    canAccessToTraefikFiles,
    canAccessToDocker,
    canAccessToAPI,
    canAccessToSSHKeys,
    canAccessToGitProviders
  ) {
    return this.makeRequest('/admin.assignPermissions', 'POST', {
      userId,
      canCreateProjects,
      canCreateServices,
      canDeleteProjects,
      canDeleteServices,
      accesedProjects,
      accesedServices,
      canAccessToTraefikFiles,
      canAccessToDocker,
      canAccessToAPI,
      canAccessToSSHKeys,
      canAccessToGitProviders,
    });
}
}
