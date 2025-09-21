const express = require('express')
const {user} = require('./routes/user')
const {course} = require('./routes/course');
const {admin} = require('./routes/admin');
const app = express()
const mongoose = require('mongoose')
app.use('/api/v1/user',user);
app.use('/api/v1/course',course);
app.use('/api/v1/admin',admin);


async function connection(){
await mongoose.connect('mongodb+srv://kashanchaudhary99_db_user:da8eRowWpplHALiY@courseapp.8laivvi.mongodb.net/course_selling_app')
app.listen(3000)
console.log("server is listening on port 3000")
}

connection()