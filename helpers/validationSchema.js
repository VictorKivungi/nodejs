const Joi = require("joi");

const authSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(1).required(),
});
module.exports = {
  authSchema,
};
