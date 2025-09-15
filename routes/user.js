const {Router} = require('express')

const user = Router()


user.post('/signup',(req,res)=>{
    res.json({
        msg:"test"
    })
})

user.post('/signin',(req,res)=>{
        res.json({
        msg:"test"
    })
})


user.get('/purchases',(req,res)=>{
        res.json({
        msg:"test"
    })
})


module.exports={
    user:user
}