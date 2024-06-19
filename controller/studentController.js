const Student = require("../models/students");

module.exports = {
    addStudent : async(req, res, next)=>{

        // const { firstname, lastname, gender } = req.body;
    
        try{
            const student = new Student(req.body);
            const result = await student.save();
            res.send(result);
        } catch (error){
            console.log(error.message);
        }
        
    },

    getallStudents : async(req, res, next) =>{
        Student.find({}).then((student)=>{
            res.send(student);
        })
            
        },

    updateStudent : async(req, res, next) =>{
        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true}
            const result = await Student.findByIdAndUpdate(id, update, options)

            res.send(result);
        }catch (error) {
            console.log(error.message)
        }
    
       },

       deleteStudent : async (req, res, next) => {
        try {

          const id = req.params.id;
          const result = await Student.findByIdAndDelete(id);
      
          res.send( {message: 'Student has been deleted', result});

        } catch (error) {
          console.log(error.message);
          res.status(500).send('Server error');
        }
      },

      deleteAllStudents: async (req, res, next) => {
        try {

            const result = await Student.deleteMany({});
            res.send({ message: 'All students have been deleted', result });

        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
    }
    


}