const express = require('express')

const router = express.Router();

router.get('/sign-in', (req, res)=>{
    return res.json('sing-in')
});

router.get('/sign-up', (req, res)=>{
    return res.json('sing-up')
});

module.exports  = router;