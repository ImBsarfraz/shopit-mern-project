import mongoose from "mongoose";
import Product from "../models/products.js"
import products from "./data.js";

const seedProducts = async()=>{
    try{
        await mongoose.connect('mongodb+srv://sarfrazbagwan:ArfOAT6qFSEaWaGH@codingschool.rhsu5.mongodb.net/shopit?retryWrites=true&w=majority&appName=codingschool');

        await Product.deleteMany();
        console.log('Products Are Deleted');

        await Product.insertMany(products);
        console.log('Products Are Added');
        process.exit();
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
};

seedProducts();