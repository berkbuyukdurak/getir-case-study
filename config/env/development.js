require('dotenv').config();

module.exports = {
    app: {
        title: 'Development Environment',
        timeout: 3000
    },
    server: {
        port: process.env.port || 3000,
        hostname: process.env.host || 'localhost'
    },
    db: process.env.MONGODB_URI
}