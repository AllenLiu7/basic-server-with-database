'use strict'
const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.render('login')
})

router.get('/chatroom', (req, res, next)=>{
    res.render('chatroom')
})

module.exports = {
    router
}