'use strict'
const router = require('express').Router();
const playerModel = require('../models').playerModel

router.get('/', (req, res, next)=>{
    res.render('login')
  
})

router.get('/chatroom', (req, res, next)=>{
    res.render('chatroom')
})

router.get('./chat', (req, res, next)=>{
    res.render('rooms')
})

router.get('/allen',  async (req, res, next)=>{
    try{
        const Allen = new playerModel({name: "All", email: 'allen@gml.com'})
        await Allen.save()
        console.log(Allen);
        res.send(Allen)}
        catch(error){console.log(error)}
    
})

router.get('*', (req, res)=>{
    res.status(404).render('404')
})


module.exports = {
    router
}