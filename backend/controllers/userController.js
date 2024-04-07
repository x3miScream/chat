const {User} = require('../models/user.model.js');

const getAll = async (req, res) => {
    try{
        const allUsers = await User.find({}).select('-password');

        return res.status(200).json({messages: [], users: allUsers});
    }
    catch(error){
        console.log(`Error in userController during getAll: ${error.message}`);
        res.status(500).json({messages: ['Internal Server Error']});
    }
};

const getAllUsersForSidebar = async (req, res) => {
    try{
        const loggedInUserId = req.user._id;
        const users = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');

        return res.status(200).json({messages: [], users: users});
    }
    catch(error){
        console.log(`Error in userController during getAll: ${error.message}`);
        res.status(500).json({messages: ['Internal Server Error']});
    }
};

const getById = async (req, res) => {
    try{
        const {userId} = req.params;
        const user = await User.findById(userId).select('-password');

        if(user) {
            return res.status(200).json({messages: [], data: user});
        }
        else{
            return res.status(200).json({messages: [], data: {}});
        }
    }
    catch(error){
        console.log(`Error in userController during getById: ${error.message}`);
        res.status(500).json({messages: ['Internal Server Error']});
    }
};

module.exports = {
    getAll,
    getById,
    getAllUsersForSidebar
}