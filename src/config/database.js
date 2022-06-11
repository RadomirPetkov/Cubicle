const mongoose = require('mongoose');

exports.initializeDatabase = () => {
    console.log(`DB connected`);
   return mongoose.connect('mongodb://localhost:27017/cubicle');}