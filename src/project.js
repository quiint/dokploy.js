// src/project.js

import Api from '../utils/makeRequest.js';

export default class Project extends Api {
  async create(data) {
    return this.makeRequest('/project.create', 'POST', data);
  }

  async one(projectId) {
    return this.makeRequest(`/project.one?projectId=${projectId}`);
  }

  async all() {
    return this.makeRequest('/project.all');
  }

  async remove(data) {
    return this.makeRequest('/project.remove', 'POST', data);
  }

  async update(data) {
    return this.makeRequest('/project.update', 'POST', data);
  }
}
