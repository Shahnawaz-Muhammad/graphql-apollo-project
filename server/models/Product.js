import mongoose from 'mongoose'

// Define the Product schema
const productSchema = new mongoose.Schema({
  title: {
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
  price: {
    type: String,
    required: true,
  },
//   postedBy:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User"
// }
});

mongoose.model("Product", productSchema);
