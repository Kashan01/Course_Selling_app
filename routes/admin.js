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
    const adminId= req.userId
  const {title,description,imageUrl,price,courseId} = req.body

     const course = await adminModel.updateOne({
        _id:courseId,
        creatorId:adminId
     },
        {
        title,
        imageUrl,
        description,
        price
     })

    res.json({
        message:"Course Updated...",
        courseId:course._id
    })
})

admin.get('/allCourses', adminmiddleware, async(req,res)=>{
    const adminId=req.userId

    const allCourses = await courseModel.find({
        creatorId:adminId
    })
        res.json({
        msg:"All courses lists",
        allCourses
    })
})

module.exports={
    admin:admin
}