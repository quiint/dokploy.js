// src/auth.js

import Api from '../utils/makeRequest.js';

export default class Auth extends Api {
    async createAdmin(email, password) {
        return this.makeRequest('/auth.createAdmin', 'POST', { email, password });
      }
    
      async createUser(password, id, token) {
        return this.makeRequest('/auth.createUser', 'POST', { password, id, token });
      }
    
      async login(email, password) {
        return this.makeRequest('/auth.login', 'POST', { email, password });
      }
    

  async get() {
    return this.makeRequest('/auth.get');
  }

  async logout() {
    return this.makeRequest('/auth.logout', 'POST');
  }

  async update(id, email, password, rol, image, secret, token, is2FAEnabled, createdAt) {
    return this.makeRequest('/auth.update', 'POST', {
      id, email, password, rol, image, secret, token, is2FAEnabled, createdAt,
    });
  }

  async generateToken() {
    return this.makeRequest('/auth.generateToken', 'POST');
  }

  async one(id) {
    return this.makeRequest(`/auth.one?id=${id}`);
  }

  async updateByAdmin(
    id,
    email,
    password,
    rol,
    image,
    secret,
    token,
    is2FAEnabled,
    createdAt
  ) {
    return this.makeRequest('/auth.updateByAdmin', 'POST', {
      id,
      email,
      password,
      rol,
      image,
      secret,
      token,
      is2FAEnabled,
      createdAt,
    });
  }

  async generate2FASecret() {
    return this.makeRequest('/auth.generate2FASecret');
  }

  async verify2FASetup(pin, secret) {
    return this.makeRequest('/auth.verify2FASetup', 'POST', { pin, secret });
  }

  async verifyLogin2FA(pin, id) {
    return this.makeRequest('/auth.verifyLogin2FA', 'POST', { pin, id });
  }

  async disable2FA() {
    return this.makeRequest('/auth.disable2FA', 'POST');
  }

  async verifyToken() {
    return this.makeRequest('/auth.verifyToken', 'POST');
  }
}
