// src/auth.js

import Api from '../utils/makeRequest.js';

export default class Auth extends Api {
  async createAdmin(data) {
    return this.makeRequest('/auth.createAdmin', 'POST', data);
  }

  async createUser(data) {
    return this.makeRequest('/auth.createUser', 'POST', data);
  }

  async login(data) {
    return this.makeRequest('/auth.login', 'POST', data);
  }

  async get() {
    return this.makeRequest('/auth.get');
  }

  async logout() {
    return this.makeRequest('/auth.logout', 'POST');
  }

  async update(data) {
    return this.makeRequest('/auth.update', 'POST', data);
  }

  async generateToken() {
    return this.makeRequest('/auth.generateToken', 'POST');
  }

  async one(id) {
    return this.makeRequest(`/auth.one?id=${id}`);
  }

  async updateByAdmin(data) {
    return this.makeRequest('/auth.updateByAdmin', 'POST', data);
  }

  async generate2FASecret() {
    return this.makeRequest('/auth.generate2FASecret');
  }

  async verify2FASetup(data) {
    return this.makeRequest('/auth.verify2FASetup', 'POST', data);
  }

  async verifyLogin2FA(data) {
    return this.makeRequest('/auth.verifyLogin2FA', 'POST', data);
  }

  async disable2FA() {
    return this.makeRequest('/auth.disable2FA', 'POST');
  }

  async verifyToken() {
    return this.makeRequest('/auth.verifyToken', 'POST');
  }
}
