const mongoose = require('mongoose');

require("dotenv").config();

const connectWithDb = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        UseUnifiedTopology:true
    })
    .then(()=>{
        console.log("db connection successfull");
    })
    .catch((error)=>{
        console.log("error in db connection");
        console.error(error.message);
    });
}

module.exports = connectWithDb;