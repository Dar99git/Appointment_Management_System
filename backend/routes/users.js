const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// router.get("/getOne/:id", async (req, res) => {
// 	const filter = { _id: req.params.id };
  
// 	const data = await User.findById(filter,{password:0});
  
// 	if (data) {
// 	  return res.status(200).send({ success: true, User: data });
// 	} else {
// 	  return res.status(400).send({ success: false, msg: "Data not found" });
// 	}
//   }); 
  

  router.get("/getOne/:id", async (req, res) => {
	const filter = { email: req.params.id };
  
	const data = await User.findOne(filter,{password:0});
  
	if (data) {
	  return res.status(200).send({ success: true, User: data });
	} else {
	  return res.status(400).send({ success: false, msg: "Data not found" });
	}
  }); 
  



module.exports = router;
