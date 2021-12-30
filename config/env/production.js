const db_uri = require('../database/database_config.json');

module.exports = {
    app: {
        title: 'Production Environment',
        timeout: 3000
    },
    server: {
        port: process.env.port || 8080,
        hostname: process.env.host || 'localhost'
    },
    db: db_uri.MONGODB_URI
}