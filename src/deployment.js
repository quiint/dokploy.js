// src/deployment.js

import Api from '../utils/makeRequest.js';

export default class Deployment extends Api {
  async all(applicationId) {
    return this.makeRequest(`/deployment.all?applicationId=${applicationId}`);
  }

  async allByCompose(composeId) {
    return this.makeRequest(`/deployment.allByCompose?composeId=${composeId}`);
  }
}
