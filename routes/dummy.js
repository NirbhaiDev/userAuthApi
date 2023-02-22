const router = require('express').Router();

router.get('/-dummy-check', (req, res)=> {
    res.send('wonder devlopper');
});

module.exports = router;   