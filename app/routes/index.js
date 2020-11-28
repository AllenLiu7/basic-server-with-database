'use strict'
const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.render('login')
})

router.get('/chatroom', (req, res, next)=>{
    res.render('chatroom')
})

router.get('./chat', (req, res, next)=>{
    res.render('rooms')
})

router.get('*', (req, res)=>{
    res.status(404).render('404')
})


module.exports = {
    router
}