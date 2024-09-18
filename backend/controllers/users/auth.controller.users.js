const bcrypt = require("bcryptjs");
const User = require("../../models/users/user.models");
const generateTokenAndSetCookie = require("../../utils/generateToken");

const signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmPassword } = req.body; // Extract req.body

    // Check password and confirmPassword are same or not
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password don't match" });
    }

    // Check, what! username is already in exists in database
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const emailID = await User.findOne({ email });
    if (emailID) {
      return res.status(400).json({ message: "Email already used" });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
    });

    // check new user is created or not
    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res); // generate Token and set cookie
      const response = await newUser.save();
      res.status(201).json({
        _id: response._id,
        fullname: response.fullname,
        username: response.username,
        email: response.email,
      });
    } else {
      return res.status(400).json({ message: "Invalid User" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (user.blocked === true) {
      return res
        .status(400)
        .json({ err: "User blocked, you cannot access this account." });
    }

    const comparePassword = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !comparePassword) {
      return res.status(400).json({ err: "Incorrect username or password" });
    }

    // Generate Token and set cookie
    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      email: user.email,
      profilePic: user?.profilePic || "",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.cookie("dashboard_jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "Internal Server Error" });
  }
};

module.exports = { signup, login, logout };
