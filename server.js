'use strict'

const express = require('express');
const chatApp = require('./app/routes')
const connectDB = require('./app/db')
require('dotenv').config()

const app = express();
app.set("port", process.env.PORT || 3000)
connectDB();

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/', chatApp.router)



app.listen(app.get('port'), ()=>{
    console.log('chatapp running on Port: ' + app.get('port'))
})