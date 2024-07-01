const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const authSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
 
});

authSchema.pre('save', async function(next){
  try{
    const salt = await bcrypt.genSalt(10)

    const hashedPwd = await bcrypt.hash(this.password, salt)

    this.password = hashedPwd

    next()
  } catch (error) {

    next(error)

  }
})

const Auth = mongoose.model("auth", authSchema);
module.exports = Auth;

