import mongoose from "mongoose";

 export const connectDB=async ()=>{
    await mongoose.connect('mongodb+srv://Meghana:meghadeep@cluster0.vos1lnu.mongodb.net/food-delivery').then(()=>console.log("DB Connected"));
}