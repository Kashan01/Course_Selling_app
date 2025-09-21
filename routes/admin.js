const {Router} = require("express")
const {adminModel} = require('../db')
const admin = Router();

admin.post('/signup',(req,res)=>{
    res.json({
        msg:"test"
    })
})

admin.post('/signin',(req,res)=>{
        res.json({
        msg:"test"
    })
})

admin.post('/addCourse',(req,res)=>{
        res.json({
        msg:"test"
    })
})


admin.put('/change',(req,res)=>{
        res.json({
        msg:"test"
    })
})

admin.get('/allCourses',(req,res)=>{
        res.json({
        msg:"test"
    })
})

module.exports={
    admin:admin
}