const express = require('express');
const dotenv = require('dotenv');
const authenticationRoutes = require('./routes/authentication/authenticationRoutes.js');
const userRoutes = require('./routes/user/userRoutes.js');

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;


//authentication routes
app.use('/api/auth', authenticationRoutes);


//user routes
app.use('/api/user', userRoutes);


app.get('/', (req, res) => {
    res.send('default route');
});

app.listen(PORT, () => console.log(`service is running on ${PORT}`));