const express = require('express')
const {user} = require('./routes/user')
const {course} = require('./routes/course');
const {admin} = require('./routes/admin');
const app = express()

app.use('/api/v1/user',user);
app.use('/api/v1/course',course);
app.use('/api/v1/admin',admin);




app.listen(3000)