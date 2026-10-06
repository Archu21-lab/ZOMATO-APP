const mongoose = require('mongoose');

function connectDB(){
    mongoose.connect("mongodb://localhost27017/food-view")
    .then(()=>{
        console.log("database connected")
    })
    .catch((err)=>{
        console.log("mongodb connection error:",err);
    })
}

module.exports = connectDB