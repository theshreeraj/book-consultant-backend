import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://shreerajmane007:1234567890@cluster0.bkgzb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err, "Error connecting to database"));

