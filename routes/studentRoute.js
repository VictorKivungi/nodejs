const express = require ('express');
const routes = express.Router();
const Student = require ('../models/students');
const studentController = require('../controller/studentController');


// search specific student
routes.get('/getStudent/:id', studentController.getStudent);
//add students
routes.post('/addStudent', studentController.addStudent);

// Display All Students
routes.get('/getallStudents', studentController.getallStudents);

// Update part of a Student record
routes.patch('/updateStudent/:id', studentController.updateStudent);

//delete students from the DB
routes.delete('/deleteStudent/:id', studentController.deleteStudent);

// Delete all Students
routes.delete('/deleteAllStudents', studentController.deleteAllStudents);

module.exports = routes;