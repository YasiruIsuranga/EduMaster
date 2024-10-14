
const User = require('../../models/User')
const bcrypt = require('bcryptjs')

const registerUser = async(req,res)=> {
    const {userName, userEmail, password, role} = req.body;

    const exitingUser = await User.findOne({userEmail});

    if(exitingUser) {
        return res.status(400).json({
            success : false,
            message : 'User Email already exists'
        })
    }

    const hashPassword = await bcrypt.hash(password , 10);
    const newUser = new User({userName, userEmail, role, password : hashPassword})
    
    await newUser.save()

    return res.status(201).json({
        success : true,
        message : 'User Registered Successfully'
    });
};

module.exports = {registerUser};