const router = require('express').Router();



router.route('/').get((req, res) => {
    res.send("Welcome to the Getir Case Study!");
})

module.exports = router;