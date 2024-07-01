const express = require ('express');
const routes = express.Router();
const authController = require('../controller/authController');

// routes.post('/registerStudent', authController.registerStudent);

routes.post('/registerUser', authController.registerUser);

routes.get('/loginStudent/:Id', authController.loginStudent);

routes.get('/usersStudents', authController.usersStudents);

module.exports = routes;