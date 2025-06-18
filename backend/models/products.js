import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        maxLength: [200, 'Product Name Cannot Exceed 200 Characters']
    },
    price: {
        type: Number,
        required: [true, 'Please Enter Product Price'],
        maxLength: [10, 'Product Price Cannot Exceed 10 Digits']
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product Description']
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        enum: {
            values: [
                "Smartphones",
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Food",
                "Books",
                "Sports",
                "Outdoor",
                "Home"
            ],
            message: 'Please Select Coorect Category',
        },
    },
    seller: {
        type: String,
        required: [true, 'Please Enter Product Seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please Enter Product Stock']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
    }

}, { timestamps: true } );

export default mongoose.model('Product', productSchema);

// public_id and url in images will be coming from cloudinary
// enum  to restrict user to select perticular category
// user required false before adding user to product
// user required true for adding user to product
// productcontroller.js create a user