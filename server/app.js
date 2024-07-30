import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node';
import { authRouter } from './routes/authRoutes.js';
import cookieParser from 'cookie-parser';
import http from 'http'
import mongoose from 'mongoose';

config();


// const express = require('express')
// const cors = require('cors')
// const SpotifyWebApi = require('spotify-web-api-node')
// require('dotenv').config()

// const uri = process.env.MONGO_URI
// mongoose.connect(uri)
// .then(()=>{
//   console.log("DB connected");
// })
// .catch(err => {
//   console.log("Error", err);
// })

const app = express()
// const server = http.createServer(app)

export const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,

})

app.use(cors({
  origin : "*",
  credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/api/auth', authRouter)

const PORT = process.env.PORT


app.get('/', (req, res)=>{
  res.send('Hello World')
})


app.listen(PORT, (err)=>{
  err? console.log("Error", err):console.log(`Server listening at port ${PORT}`)
})