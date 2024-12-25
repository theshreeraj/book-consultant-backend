import mongoose from "mongoose";

const connectDB = async () => {

    try{
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect("mongodb+srv://shreerajmane007:1234567890@cluster0.bkgzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }catch(error) {
        console.error(error)
    }

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.