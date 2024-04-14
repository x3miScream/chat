const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authenticationRoutes = require('./routes/authenticationRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const messageRoutes = require('./routes/messageRoutes.js');
const connectToMongoDB = require('./db/connectToMongoDB.js');
const {app, server} = require('./socket/socket.js');
const path = require('path');

const PORT = process.env.PORT || 8000;

// const __dirname = path.resolve();

dotenv.config();


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));


app.use(express.json()); // to parse the incoming requests with JSON
app.use(cookieParser());





//authentication routes
app.use('/api/auth', authenticationRoutes);

//user routes
app.use('/api/user', userRoutes);

//messages routes
app.use('/api/message', messageRoutes);

// app.get('/', (req, res) => {
//     res.send('default route');
// });


app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
    console.log(path.join(__dirname, '../frontend', 'build', 'index.html'));
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'));
});


// app.listen(PORT, () => {
server.listen(PORT, () => {
    connectToMongoDB.connectoToMongoDB();

    console.log(`service is running on ${PORT}`);
});