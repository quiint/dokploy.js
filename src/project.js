// src/project.js

import Api from '../utils/makeRequest.js';

export default class Project extends Api {
  async create(name, description) {
    return this.makeRequest('/project.create', 'POST', { name, description });
  }

  async one(projectId) {
    return this.makeRequest(`/project.one?projectId=${projectId}`);
  }

  async all() {
    return this.makeRequest('/project.all');
  }

  async remove(projectId) {
    return this.makeRequest('/project.remove', 'POST', { projectId });
  }

  async update(name, description, projectId) {
    return this.makeRequest('/project.update', 'POST', {
        name, 
        description,
        projectId
    });
  }
}
