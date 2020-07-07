const express = require('express')
const bycrypt = require('bcrypt')
const {Account} = require('../models')
const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res)=>{
    return res.json('sing-in')
});

router.get('/sign-up', async (req, res)=>{

    const {email, password } = req.body;

    console.log({email, password})
    const hash = bycrypt.hashSync(password,saltRounds)

    const account = await Account.findOne({where: {email:email}});
    if(account) return res.jsonBadRequest(null , 'Account already exits');

    const result = await Account.create({email, password: hash });
    return res.jsonOK(result)
});

module.exports  = router;