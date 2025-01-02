const express= require('express');
const app=express();
const userModule = require('./userSchema.js');
import connectDB from './db.js';

connectDB();

app.post('/addUser', async (req, res) => {
try{
    const {name, email, contact} = req.body;
    const userExist = await userModule.findOne({email});
    if(userExist){
     res.send({message:"User already exist"});
    }
    const newUser = new userModule({name, email, contact});
    await newUser.save();
    res.send({message:"new user created"})
}
catch(err){return res.send(error)}
});

app.listen(9000, ()=>{
    console.log("server is running...")
});


