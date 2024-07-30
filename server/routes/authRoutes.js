import { callback, loginController, logoutController, registerController } from '../controllers/authControllers.js';
import express from 'express'


// const express = require('express')

export const authRouter = express.Router();

authRouter.get('/login', loginController)

authRouter.get('/callback', callback)

authRouter.post('/register', registerController)

authRouter.post('/logout', logoutController)