import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoute from './routes/posts.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use('/posts', postRoute)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

mongoose.connect(process.env.DB_CONNECTION_URL)
    .then(() => app.listen(port,(req,res)=>{console.log(`Server running on port ${port}`)}))
    .catch((error) => console.log("Found the error --> ", error))