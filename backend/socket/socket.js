const {Server} = require('socket.io');
const http = require('http');
const express = require('express')

const app = express();


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST']
    }
});

const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;

    if(userId != 'undefined') userSocketMap[userId] = socket.id;

    console.log(`A user connected at: ${socket.id} with user: ${userId}`);

    //io.emit() is used to send events to all the connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log(`A user disconnected from: ${socket.id}`);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

module.exports = {
    app,
    io,
    server,
    getReceiverSocketId
};