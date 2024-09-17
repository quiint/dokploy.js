// src/settings.js

import Api from '../utils/makeRequest.js';

export default class Settings extends Api {
  async reloadServer() {
    return this.makeRequest('/settings.reloadServer', 'POST');
  }

  async reloadTraefik() {
    return this.makeRequest('/settings.reloadTraefik', 'POST');
  }

  async toggleDashboard(data) {
    return this.makeRequest('/settings.toggleDashboard', 'POST', data);
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

  async saveSSHPrivateKey(data) {
    return this.makeRequest('/settings.saveSSHPrivateKey', 'POST', data);
  }

  async assignDomainServer(data) {
    return this.makeRequest('/settings.assignDomainServer', 'POST', data);
  }

  async cleanSSHPrivateKey() {
    return this.makeRequest('/settings.cleanSSHPrivateKey', 'POST');
  }

  async updateDockerCleanup(data) {
    return this.makeRequest('/settings.updateDockerCleanup', 'POST', data);
  }

  async readTraefikConfig() {
    return this.makeRequest('/settings.readTraefikConfig');
  }

  async updateTraefikConfig(data) {
    return this.makeRequest('/settings.updateTraefikConfig', 'POST', data);
  }

  async readWebServerTraefikConfig() {
    return this.makeRequest('/settings.readWebServerTraefikConfig');
  }

  async updateWebServerTraefikConfig(data) {
    return this.makeRequest('/settings.updateWebServerTraefikConfig', 'POST', data);
  }

  async readMiddlewareTraefikConfig() {
    return this.makeRequest('/settings.readMiddlewareTraefikConfig');
  }

  async updateMiddlewareTraefikConfig(data) {
    return this.makeRequest('/settings.updateMiddlewareTraefikConfig', 'POST', data);
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

  async updateTraefikFile(data) {
    return this.makeRequest('/settings.updateTraefikFile', 'POST', data);
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

  async writeTraefikEnv(data) {
    return this.makeRequest('/settings.writeTraefikEnv', 'POST', data);
  }

  async haveTraefikDashboardPortEnabled() {
    return this.makeRequest('/settings.haveTraefikDashboardPortEnabled');
  }
}
