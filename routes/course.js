const {Router} = require("express")

const course = Router()

course.post('/purchase',(req,res)=>{
    res.json({
        msg:"test"
    })
})

course.get('/all' ,(req,res)=>{
    res.json({msg:"test"})
})


module.exports={
    course:course
}