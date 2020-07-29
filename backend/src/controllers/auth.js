const express = require('express')
const bycrypt = require('bcrypt')
const {Account} = require('../models')
const { accountSignUp } = require('../validators/account');
const { getMessage } = require('../helpers/validator');


const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res)=>{
    return res.json('sing-in')
});

router.get('/sign-up', accountSignUp, async (req, res)=>{

    const {email, password } = req.body;

    console.log({email, password})
    const hash = bycrypt.hashSync(password,saltRounds)

    const account = await Account.findOne({where: {email:email}});
    if(account) return res.jsonBadRequest(null , getMessage('account.signup.email_existis'));

    const result = await Account.create({email:email, password: hash });
    return res.jsonOK(result,getMessage('account.signup.account.created'))
});
 
module.exports  = router;