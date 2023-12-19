const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 3000
const UserModel = require('./models/User')
const connectDb = require('./config/dbcon')
const app = express()

app.use(cors())
app.use(express.json())

connectDb()

app.use('/',require('./routes/route'))

app.listen(PORT,() =>{
    console.log("Server is Runing")
})