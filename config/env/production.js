require('dotenv').config();

module.exports = {
    app: {
        title: 'Production Environment',
        timeout: 3000
    },
    server: {
        port: process.env.port || 8080,
        hostname: process.env.HOSTNAME || 'localhost'
    },
    db: process.env.MONGODB_URI
}