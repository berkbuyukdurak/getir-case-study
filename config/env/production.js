module.exports = {
    app: {
        title: 'Production Environment',
        timeout: 3000
    },
    server: {
        port: process.env.port || 8080,
        hostname: process.env.host || 'localhost'
    },
    db: "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true"
}