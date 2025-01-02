const mongoose = require('mongoose');   
const uri = 'mongodb+srv://sumankr8586:mern%40123@mern.yyc25.mongodb.net/MERN?retryWrites=true&w=majority&appName=mern';
function connectDB(){
    mongoose
    .connect(uri)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
}
module.exports = connectDB;
