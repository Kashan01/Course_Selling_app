const {Router} = require('express')
const {userModel}=require('../db')
const user = Router()
const jwt = require("jsonwebtoken")
const {JWT_SECRET}= require('../config')

user.post('/signup', async (req, res) => {
    const { email, password, firstname, lastname } = req.body;

    try {
        await userModel.create({
            email,
            password,
            firstname,
            lastname
        });
        res.status(201).json({ message: 'User created successfully' });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

user.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    const user= await userModel.findOne({
        email,
        password
    })

    if(user){
     const token=jwt.sign({id:user._id},JWT_SECRET)
     res.json({token})
    }else{
        res.status(403).json({
            message:"incorrect credentials...."
        })
    }
    
     
})


user.get('/purchases',(req,res)=>{
        res.json({
        msg:"test"
    })
})


module.exports={
    user:user
}