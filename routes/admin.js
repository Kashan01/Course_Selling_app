const {Router} = require("express")
const {adminModel, courseModel} = require('../db')
const admin = Router();
const jwt = require('jsonwebtoken');
const {secret}= require('../config');
const { adminmiddleware } = require("../middleware/adminmiddleware");

admin.post('/signup',async (req,res)=>{
    const {email,password,firstname,lastname}=req.body

    try{
        await adminModel.create({
        email,
        password,
        firstname,
        lastname
    })
    res.status(201).json({
        message:"signin as admin success.."
    })
    }catch(e){
        console.log(e)
        res.status(500).json({error:"Internal server error in admin db"})
    }

})

admin.post('/signin', async (req,res)=>{

    const {email,password}=req.body
   const admin= await adminModel.findOne({
        email,
        password
    })

    if(admin){
        const token = jwt.sign({id:admin._id},secret)
        res.status(201).json({
            token
        })
    }else{
        res.status(500).json({
            message:"couldn't varify this admin credential..."
        })
    }
      
})

admin.post('/addCourse',adminmiddleware, async(req,res)=>{
    const adminId = req.userId
    const {title,description,price,imageUrl,creatorId} = req.body
   const course=  await courseModel.create({
        title,
        imageUrl,
        creatorId,
        description,
        price
     })

     res.json({
        message:"course created",
        courseId:course._id
     })
})


admin.put('/change',adminmiddleware,async(req,res)=>{
     const course = adminModel.findOne({
        title,
        imageUrl,
        creatorId,
        description,
        price
     })

     if(course){
        
     }
})

admin.get('/allCourses',(req,res)=>{
        res.json({
        msg:"test"
    })
})

module.exports={
    admin:admin
}