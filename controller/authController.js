const Auth = require("../models/authModel");
const createError = require("http-errors");
const { authSchema } = require("../helpers/validationSchema");
const { signAccessToken } = require("../helpers/jwtHelper");
const Joi = require("joi");

module.exports = {

    // registerStudent : async(req, res, next)=>{

        // const { firstname, lastname, gender } = req.body;
    
    //     try{
    //         const auth = new Auth(req.body);
    //         const result = await auth.save();
    //         res.send({message: "Student Registered",result});
    //     } catch (error){
    //         console.log(error.message);
    //     }
        
    // },

    loginStudent : async(req, res, next)=>{
        const id = req.params.id;
        
        try{
            const result = await Auth.findById(id)
          
            res.send({message: "Logged In Successfully", result})
        } catch(error) {
            
            console.log(error.message);
            
        }
    },

    usersStudents : async(req, res, next) =>{
        Auth.find({}).then((auth)=>{
            res.send(auth);
        })
            
        },

        

// register
registerUser: async (req, res, next) => {
  try {
    const {email, password} = req.body;
    if (email) {
    const result = await authSchema.validateAsync(req.body);

    const Exists = await Auth.findOne({ email: email });

    if (Exists) throw createError.Conflict(`${ email } is already been registered`);
    const auth = new Auth(result);

    const savedUser = await auth.save();
    const accessToken = await signAccessToken(savedUser._id);

    res.send({message: 'User saved Successfully', savedUser, accessToken }); 
   
}
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
},
    

    
    

}
