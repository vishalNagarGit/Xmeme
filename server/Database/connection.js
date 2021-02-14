const mongoose=require('mongoose');
require('dotenv').config();


const URI=process.env.DB_URL;
//console.log(URI);
const connectDB = async()=>{
    await mongoose.connect(URI,{ useNewUrlParser: true ,useUnifiedTopology: true});
    console.log("database connected");
}

module.exports = connectDB;