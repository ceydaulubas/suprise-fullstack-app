const mongoose = require('mongoose');
const { User } = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Response = require('../Classes/APIServiceResponse');
require("dotenv").config();

const response = new Response();
const necessaryData = (response) => {
    return {
        _id: response._id,
        username: response.username,
        email: response.email,
        created: response.created,
        password: response.password,
    };
},
    responsData = (code, status, message) => {
        response.statusCode = code;
        response.status = status;
        response.message = message;
        return response;
    };

module.exports.signUpUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate user input
        if (!(email && password && username)) {
            res.status(400).send("All input is required");
        }

        // Check if user already exist
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const response = responsData(409, false, "User already exists.");
            return res.status(409).json(response);
        }

        //Encrypt user password
        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: encryptedPassword,
            created: new Date(),
        });

        const newUser = await user.save();

        // Create JWT token
        const token = jwt.sign(
            { userId: newUser._id, email: newUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        const response = responsData(200, true, "User created successfully.");
        response.data = [
            {
                userList: necessaryData(newUser),
                token,
            },
        ];
        res.status(200).json(response);

    } catch (err) {
        const response = responsData(500, false, "User could not be created.");
        response.data = err;
        res.status(500).json(response);
    }
};

module.exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400);
            throw new Error("All fields are mandatory!");
        }

        // Check if user exists
        const user = await User.findOne({ email });

        if (!user) {
            res.status(400);
            throw new Error("Invalid email or password");
        }

        // Check if password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Create JWT token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        res.status(200).json({ token, message: "Logged in successfully" });
        console.log("response", response)
    }
    catch (error) {
        res.status(500).json({ message: "An error occurred while logging in" });
        console.log("response", response)
    }

};
