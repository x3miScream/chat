const loginUser = (req, res) => {
    res.send('login')
};

const logoutUser = (req, res) => {
    res.send('logout')
};

const signup = (req, res) => {
    res.send('signup')
};

module.exports = {
    loginUser: loginUser,
    logoutUser: logoutUser,
    signup: signup
}