// src/index.js

import Applications from './src/applications.js';
import Admin from './src/admin.js';
import Auth from './src/auth.js';
import Backup from './src/backup.js';
import Certificates from './src/certificates.js';
import Cluster from './src/cluster.js';
import Compose from './src/compose.js';
import Deployment from './src/deployment.js';
import Destination from './src/destination.js';
import Docker from './src/docker.js';
import Domain from './src/domain.js';
import MariaDB from './src/mariadb.js';
import Mongo from './src/mongo.js';
import Mounts from './src/mounts.js';
import MySQL from './src/mysql.js';
import Port from './src/port.js';
import Postgres from './src/postgres.js';
import Project from './src/project.js';
import Redirects from './src/redirects.js';
import Redis from './src/redis.js';
import Registry from './src/registry.js';
import Security from './src/security.js';
import Settings from './src/settings.js';
import SSHKey from './src/sshKey.js';
import GitProvider from './src/gitProvider.js';
import Bitbucket from './src/bitbucket.js';
import Github from './src/github.js';
import Gitlab from './src/gitlab.js';
import User from './src/user.js';

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
