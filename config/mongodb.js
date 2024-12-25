import mongoose from "mongoose";

const connectDB = async () => {

    try{
        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect("mongodb+srv://decodersclub:shreeraj@cluster0.5i0uu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    }catch(error) {
        console.error(error)
    }

}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.