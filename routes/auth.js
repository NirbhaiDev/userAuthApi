const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// register
router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    let user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    let userRes = await user.save();
    res.status(200).json(userRes);
  } catch (err) {
    res.status(300).json("user exsist already");
    console.log(err);
  }
});

// login users
router.post("/login", async (req, res) => {
  try {
    // finding the collection with the email
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");
    //  comparing password .....
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("invalid password");

    user && validPassword && res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
