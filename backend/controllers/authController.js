const { User } = require("../models/user.model.js");
const bcrypt = require('bcryptjs');
const { generateTokenAndSetCookie, destroyTokenAndCookie } = require("../utils/generateToken.js");



const loginUser = async (req, res) => {
    try{
        const {username, password} = req.body;
        let errors = [];

        const user = await User.findOne({username});

        if(user){
            const hashedPassword = await bcrypt.hash(password, user.salt);
            const isPasswordCorrect = await bcrypt.compare(password, user.password);

            if(!isPasswordCorrect)
            {
                errors.push('Invalid password');
            }
            else{
                await generateTokenAndSetCookie(user._id, res);
            }
        }
        else{
            errors.push('Invalid username');
        }

        if(errors.length > 0)
        {
            res.status(400).json({error: errors.concat()});
        }
        else{
            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic,
                gender: user.gender,
                message: 'Login Success'
            });
        }
    }
    catch(error){
        console.log(`Error in authController during login: ${error.message}`);
        res.status(500).json({error: 'Internal Server Error'});
    }
};





const logoutUser = async (req, res) => {
    try{
        destroyTokenAndCookie(res);
        res.status(200).json({message: 'Logout Success'});
    }
    catch(error) {
        console.log(`Error in authController during logout: ${error.message}`);
        res.status(500).json({error: 'Internal Server Error'});
    }
};





const signup = async (req, res) => {
    try{
        const {fullName, username, password, confirmPassword, gender} = req.body;
        let errors = [];

        if(password !== confirmPassword) {
            errors.push("Passwords do not match");
        }

        const user = await User.findOne({username});

        if(user) {
            errors.push('Username already exists');
        }

        if(errors.length > 0)
        {
            return res.status(400).json({error: errors.concat()});
        }

        // HASH PASSOWRD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        //https://avatar-placeholder.iran.liara.run/

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await new User({
            fullName:fullName,
            username:username,
            password:hashedPassword,
            salt: salt,
            gender:gender,
            profilePic: (gender === 'male' ? boyProfilePic : girlProfilePic)
        });

        if(newUser)
        {
            await newUser.save();

            await generateTokenAndSetCookie(newUser._id, res);

            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            });
        }
        else
        {
            res.status(400).json({error: 'Invalid user data'});
        }
    }
    catch(error){
        console.log(`Error in signup controller`, error.message);
        res.status(500).json({error:'Internal Server Error.'})
    }
};


module.exports = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    signup: signup
}