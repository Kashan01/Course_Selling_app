const {Router} = require("express")
const { usermiddleware } = require("../middleware/usermiddleware")
const { courseModel,purchaseModel } = require("../db")

const course = Router()

course.post('/purchase',usermiddleware,async (req,res)=>{
    const userId = req.userId
    const courseId = req.body.courseId

    await purchaseModel.create({
        userId,
        courseId
    })

    res.json({
        msg:"You have successfully bought this course..."
    })
})

course.get('/all' ,async (req,res)=>{
    const courses = await courseModel.find({})
    res.json({courses})
})


module.exports={
    course:course
}