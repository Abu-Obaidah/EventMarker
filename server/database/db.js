import mongoose from "mongoose";

const Connection = async () => {

    mongoose.connect('mongodb://127.0.0.1:27017/person_info', { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log('Successfully connected to MongoDB Compass'))
        .catch(error => console.error('Error while connecting to MongoDB Compass:', error));

}

export default Connection;

