var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'node-api'
    },
    port: 3000,
    db: 'sqlite://localhost/node-api-development',
    storage: rootPath + '/data/node-api-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'node-api'
    },
    port: 3000,
    db: 'sqlite://localhost/node-api-test',
    storage: rootPath + '/data/node-api-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'node-api'
    },
    port: 3000,
    db: 'sqlite://localhost/node-api-production',
    storage: rootPath + 'data/node-api-production'
  }
};

module.exports = config[env];
