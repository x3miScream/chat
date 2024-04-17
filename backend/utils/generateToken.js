const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = async (userId, res) => {
    try{
        const token = jwt.sign({userId}, process.env.JWT_SECRET, {
            expiresIn: '15d'
        });
    
        res.cookie('jwt', token, {
            maxAge: (15 * 24 * 60 * 60 * 1000), // in miliseconds
            httpOnly: true, // prevent xss attacks / cross-site scripting attacks,
            sameSite: 'strict',
            // sameSite: "none",
            secure: process.env.MODE_ENV !== "dev" // CSRF attacks, cross-site attacks
        });

        console.log(`Set cookie successfully`);
    }
    catch(error){
        console.log(`Failed setting cookie ${error.message}`);
    }
};

const destroyTokenAndCookie = async(res) => {
    res.cookie('jwt', "", {
        maxAge:0
    })
};

module.exports = {
    generateTokenAndSetCookie,
    destroyTokenAndCookie
};