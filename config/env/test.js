module.exports = {
    app: {
        title: 'Test Environment',
        timeout: 3000
    },
    server: {
        port: process.env.port || 3000,
        hostname: process.env.host || 'localhost'
    },
    db: "mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getir-case-study?retryWrites=true"
}