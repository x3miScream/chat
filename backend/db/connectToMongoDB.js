const mongoose = require('mongoose');

const connectoToMongoDB = async () => {
    try
    {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log('Connected to MongoDB successfully');
    }
    catch (error) {
        console.log('Error connecting to MongoDB', error.message);
    }
};

module.exports = {
    connectoToMongoDB
}