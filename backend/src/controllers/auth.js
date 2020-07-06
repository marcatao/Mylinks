const express = require('express')
const bycrypt = require('bcrypt')
const {Account} = require('../models')
const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res)=>{
    return res.json('sing-in')
});

router.get('/sign-up', async (req, res)=>{

    const email = 'thiagomarcato@gmail.com';
 
    const password = bycrypt.hashSync('123456',saltRounds)
    const result = await Account.create({email, password });

     

    return res.json(result)
});

module.exports  = router;