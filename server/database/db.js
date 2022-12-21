import mongoose from "mongoose";

const Connection = async () => {

    mongoose.connect('mongodb://127.0.0.1:27017/person_info', { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => console.log('Successfully connected to MongoDB Compass'))
        .catch(error => console.error('Error while connecting to MongoDB Compass:', error));

    // const URL = `mongodb+srv://${username}:${password}@cluster0.crdnocb.mongodb.net/person_info?retryWrites=true&w=majority`;

    // try {
    //     await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
    //     console.log("connected successfully to database");
    // }
    // catch (error) {
    //     console.log("error while connecting to database", error)
    // }

}

export default Connection;

