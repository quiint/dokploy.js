// src/settings.js

import Api from '../utils/makeRequest.js';

export default class Settings extends Api {
  async reloadServer() {
    return this.makeRequest('/settings.reloadServer', 'POST');
  }

  async reloadTraefik() {
    return this.makeRequest('/settings.reloadTraefik', 'POST');
  }

  async toggleDashboard(enableDashboard) {
    return this.makeRequest('/settings.toggleDashboard', 'POST', {
      enableDashboard,
    });
  }

  async cleanUnusedImages() {
    return this.makeRequest('/settings.cleanUnusedImages', 'POST');
  }

  async cleanUnusedVolumes() {
    return this.makeRequest('/settings.cleanUnusedVolumes', 'POST');
  }

  async cleanStoppedContainers() {
    return this.makeRequest('/settings.cleanStoppedContainers', 'POST');
  }

  async cleanDockerBuilder() {
    return this.makeRequest('/settings.cleanDockerBuilder', 'POST');
  }

  async cleanDockerPrune() {
    return this.makeRequest('/settings.cleanDockerPrune', 'POST');
  }

  async cleanAll() {
    return this.makeRequest('/settings.cleanAll', 'POST');
  }

  async cleanMonitoring() {
    return this.makeRequest('/settings.cleanMonitoring', 'POST');
  }

  async saveSSHPrivateKey(sshPrivateKey) {
    return this.makeRequest('/settings.saveSSHPrivateKey', 'POST', {
      sshPrivateKey,
    });
  }
  async assignDomainServer(letsEncryptEmail, host, certificateType) {
    return this.makeRequest('/settings.assignDomainServer', 'POST', {
      letsEncryptEmail,
      host,
      certificateType,
    });
  }

  async cleanSSHPrivateKey() {
    return this.makeRequest('/settings.cleanSSHPrivateKey', 'POST');
  }

    async updateDockerCleanup(enableDockerCleanup) {
      return this.makeRequest('/settings.updateDockerCleanup', 'POST', {
        enableDockerCleanup,
      });
    }

  async readTraefikConfig() {
    return this.makeRequest('/settings.readTraefikConfig');
  }

  async updateTraefikConfig(traefikConfig) {
    return this.makeRequest('/settings.updateTraefikConfig', 'POST', {
      traefikConfig,
    });
  } 

  async readWebServerTraefikConfig() {
    return this.makeRequest('/settings.readWebServerTraefikConfig');
  }

  async updateWebServerTraefikConfig(traefikConfig) {
    return this.makeRequest('/settings.updateWebServerTraefikConfig', 'POST', {
      traefikConfig,
    });
  }


  async readMiddlewareTraefikConfig() {
    return this.makeRequest('/settings.readMiddlewareTraefikConfig');
  }

  async updateMiddlewareTraefikConfig(traefikConfig) {
    return this.makeRequest('/settings.updateMiddlewareTraefikConfig', 'POST', {
      traefikConfig,
    });
  }


  async checkAndUpdateImage() {
    return this.makeRequest('/settings.checkAndUpdateImage', 'POST');
  }

  async updateServer() {
    return this.makeRequest('/settings.updateServer', 'POST');
  }

  async getDokployVersion() {
    return this.makeRequest('/settings.getDokployVersion');
  }

  async readDirectories() {
    return this.makeRequest('/settings.readDirectories');
  }

  async updateTraefikFile(path, traefikConfig) {
    return this.makeRequest('/settings.updateTraefikFile', 'POST', {
      path,
      traefikConfig,
    });
  }

  async readTraefikFile(path) {
    return this.makeRequest(`/settings.readTraefikFile?path=${path}`);
  }

  async getIp() {
    return this.makeRequest('/settings.getIp');
  }

  async getOpenApiDocument() {
    return this.makeRequest('/settings.getOpenApiDocument');
  }

  async readTraefikEnv() {
    return this.makeRequest('/settings.readTraefikEnv');
  }

  async writeTraefikEnv(env) {
    return this.makeRequest('/settings.writeTraefikEnv', 'POST', { env });
  }

  async haveTraefikDashboardPortEnabled() {
    return this.makeRequest('/settings.haveTraefikDashboardPortEnabled');
  }
}
