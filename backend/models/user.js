const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	//name with initials
	fullName: { type: String, required: true },
	regNo: { type: String, required: true },
	email: { type: String, required: true },
	department: { type: String, required: true },
	telephoneNo: { type: Number, required: true },
	//role:{ type: String, required: true },
	password: { type: String, required: true }
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		lastName: Joi.string().required().label("Last Name"),
		fullName: Joi.string().required().label("Full Name"),
		regNo: Joi.string().required().label("Reg No"),
		email: Joi.string().email().required().label("Email"),
		department: Joi.string().required().label("Department"),
		telephoneNo: Joi.number().required().label("Telephone No"),
		//role: Joi.string().required().label("Role"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
