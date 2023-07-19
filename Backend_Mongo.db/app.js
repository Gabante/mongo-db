require('dotenv').config();
const express = require('express');
const app = express();;

const mongoose = require('mongoose');

(async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI_TEST)
        console.log('Te haz conectado a Mongo db');
    }catch(error){
        console.log(error);
    }

})

module.exports = app;