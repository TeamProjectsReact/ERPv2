const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 

const authRoute = require('./Routes/UserRoute')
const LeaveRoute = require('./Routes/LeaveRoute')
const DeptRoute = require('./Routes/DeptRoute')

// app

const app = express();
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.use(cors())
app.use(express.json())

app.use('/auth', authRoute)
app.use('/leave', LeaveRoute)
app.use('/Dept', DeptRoute)


app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`)
})