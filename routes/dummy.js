const router = require('express').Router();

router.get('/', (req, res)=> {
    res.send('wonder devlopper');
});

module.exports = router;   