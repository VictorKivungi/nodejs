const express = require ('express');
const routes = express.Router();
const Student = require ('./models/students');



routes.get('/students',(req, res) =>{
    res.send({type:'Get Request'});
});

//add students
routes.post('/addstudents', async(req, res, next)=>{


    try{
        const student = new Student(req.body);
        const result = await student.save();
        res.send(result);
    } catch (error){
        console.log(error.message);
    }
    // res.send({type:'Post Request'});
});

//update students in the DB
routes.put('/students/:id',(req,res)=>{
    res.send({type:'Update Request'});
});

//delete students from the DB
routes.delete('/students/:id',(req,res)=>{
    res.send({type:'Delete Request'});
});

module.exports = routes;