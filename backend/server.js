const express = require('express');
const dotenv = require('dotenv');
const authenticationRoutes = require('./routes/authentication/authenticationRoutes.js');
const userRoutes = require('./routes/user/userRoutes.js');
const connectToMongoDB = require('./db/connectToMongoDB.js');

const app = express();
const PORT = process.env.PORT || 8000;


dotenv.config();



app.use(express.json()); // to parse the incoming requests with JSON



//authentication routes
app.use('/api/auth', authenticationRoutes);


//user routes
app.use('/api/user', userRoutes);


app.get('/', (req, res) => {
    res.send('default route');
});






app.listen(PORT, () => {
    connectToMongoDB.connectoToMongoDB();

    console.log(`service is running on ${PORT}`);
});