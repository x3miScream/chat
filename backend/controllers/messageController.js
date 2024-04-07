const { Conversation } = require("../models/conversation.model");
const { Message } = require("../models/mssage.model");




const getMessages = async (req, res) => {
    try{
        const {userId: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await  Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate('messages'); // populate message objects by foreign key reference

        res.status(200).json({messages: (conversation ? conversation.messages : [])});
    }
    catch(error){
        console.log(`Error in message controller in getMessages: ${error.message}`);
        res.status(500).json({messages: ['Internal Server Error']});
    }
}



const sendMessage = async (req, res) => {
    try{
        const {userId: receiverId} = req.params;
        const {message} = req.body;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });

        if(!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);

            // await newMessage.save();
            // await conversation.save();
        }



        // SOCKET IO Functionality will go here




        await Promise.all([newMessage.save(), conversation.save()]);

        console.log(`Sent message successfully: Receiver: ${newMessage}`);
        res.status(201).json({messages: [`Message sent successfully: ${newMessage}`]});
    }
    catch(error){
        console.log(`Error in message controller during sending a message: ${error.message}`);
        res.status(500).json({messages: ['Internal Server Error']});
    }
};


module.exports = {
    getMessages,
    sendMessage
}