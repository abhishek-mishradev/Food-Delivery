import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://mishratech:Mishra1234@cluster0.dvuft.mongodb.net/food-delivery').then(()=>{
        console.log("MongoDB Connected...");
    })
}