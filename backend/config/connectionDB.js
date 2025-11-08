const mongoose = require('mongoose');
const connectDB = async()=> { 
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("mongodb connected mr aimad"))
}

module.exports = connectDB;