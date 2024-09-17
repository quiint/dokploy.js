// src/user.js

import Api from '../utils/makeRequest.js';

export default class User extends Api {
  async all() {
    return this.makeRequest('/user.all');
  }

  async byAuthId(authId) {
    return this.makeRequest(`/user.byAuthId?authId=${authId}`);
  }

  async byUserId(userId) {
    return this.makeRequest(`/user.byUserId?userId=${userId}`);
  }
}
