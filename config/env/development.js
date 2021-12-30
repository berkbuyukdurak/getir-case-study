const db_uri = require('../database/database_config.json');

module.exports = {
    app: {
        title: 'Development Environment',
        timeout: 3000
    },
    server: {
        port: process.env.port || 3000,
        hostname: process.env.host || 'localhost'
    },
    db: db_uri.MONGODB_URI
}