const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config({path:'./.env'});

//___________MongoDB Connection Function_______________
console.log(process.env.DB_URL)
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("DB connected.");
}).catch((err)=>{
    console.log(err);
});