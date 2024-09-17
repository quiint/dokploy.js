// src/index.js

import Applications from './applications.js';
// src/index.js
// ... other imports ...
import Admin from './admin.js';
import Auth from './auth.js';
import Backup from './backup.js';
import Certificates from './certificates.js';
import Cluster from './cluster.js';
import Compose from './compose.js';
import Deployment from './deployment.js';
import Destination from './destination.js';
import Docker from './docker.js';
import Domain from './domain.js';
import MariaDB from './mariadb.js';
import Mongo from './mongo.js';
import Mounts from './mounts.js';
import MySQL from './mysql.js';
import Port from './port.js';
import Postgres from './postgres.js';
import Project from './project.js';
import Redirects from './redirects.js';
import Redis from './redis.js';
import Registry from './registry.js';
import Security from './security.js';
import Settings from './settings.js';
import SSHKey from './sshKey.js';
import GitProvider from './gitProvider.js';
import Bitbucket from './bitbucket.js';
import Github from './github.js';
import Gitlab from './gitlab.js';
import User from './user.js';

export default class Dokploy {
  constructor(baseUrl, apiToken) {
    this.applications = new Applications(baseUrl, apiToken);
    this.admin = new Admin(baseUrl, apiToken);
    this.auth = new Auth(baseUrl, apiToken);
    this.backup = new Backup(baseUrl, apiToken);
    this.certificates = new Certificates(baseUrl, apiToken);
    this.cluster = new Cluster(baseUrl, apiToken);
    this.compose = new Compose(baseUrl, apiToken);
    this.deployment = new Deployment(baseUrl, apiToken);
    this.destination = new Destination(baseUrl, apiToken);
    this.docker = new Docker(baseUrl, apiToken);
    this.domain = new Domain(baseUrl, apiToken);
    this.mariadb = new MariaDB(baseUrl, apiToken);
    this.mongo = new Mongo(baseUrl, apiToken);
    this.mounts = new Mounts(baseUrl, apiToken);
    this.mysql = new MySQL(baseUrl, apiToken);
    this.port = new Port(baseUrl, apiToken);
    this.postgres = new Postgres(baseUrl, apiToken);
    this.project = new Project(baseUrl, apiToken);
    this.redirects = new Redirects(baseUrl, apiToken);
    this.redis = new Redis(baseUrl, apiToken);
    this.registry = new Registry(baseUrl, apiToken);
    this.security = new Security(baseUrl, apiToken);
    this.settings = new Settings(baseUrl, apiToken);
    this.sshKey = new SSHKey(baseUrl, apiToken);
    this.gitProvider = new GitProvider(baseUrl, apiToken);
    this.bitbucket = new Bitbucket(baseUrl, apiToken);
    this.github = new Github(baseUrl, apiToken);
    this.gitlab = new Gitlab(baseUrl, apiToken);
    this.user = new User(baseUrl, apiToken);
  }
}
