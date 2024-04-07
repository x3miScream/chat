const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authenticationRoutes = require('./routes/authenticationRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const messageRoutes = require('./routes/messageRoutes.js');
const connectToMongoDB = require('./db/connectToMongoDB.js');

const app = express();
const PORT = process.env.PORT || 8000;


dotenv.config();




app.use(express.json()); // to parse the incoming requests with JSON
app.use(cookieParser());





//authentication routes
app.use('/api/auth', authenticationRoutes);

//user routes
app.use('/api/user', userRoutes);

//messages routes
app.use('/api/message', messageRoutes);

app.get('/', (req, res) => {
    res.send('default route');
});






app.listen(PORT, () => {
    connectToMongoDB.connectoToMongoDB();

    console.log(`service is running on ${PORT}`);
});