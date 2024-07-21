import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        reviews: {
            type:Array,
            required:true,
            default:[]
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numberOfReviews: {
            type: Number,
            required: true,
            default: 0,
        },
        price: {
            type: String,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
        productIsNew: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;