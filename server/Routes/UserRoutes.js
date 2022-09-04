
const express =require('express');
const { body } = require('express-validator');
const {RegisterUser,loginUser,getUserbyId,updateUser,deleteUser,getAllUser} = require('../Controllers/UserController.js')
const Router=express.Router();
Router.get('/user/:id',getUserbyId)
Router.get('/allUsers',getAllUser)
Router.post('/signUp',RegisterUser);
Router.post('/login',loginUser)
Router.put('/user/:id',updateUser)
Router.delete('/user/:id',deleteUser)

module.exports =Router; 

