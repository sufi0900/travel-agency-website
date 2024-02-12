const mongoose = require("mongoose");
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    description: {
      type: String,
      required: [true, "can't be blank"],
    },
    price: {
      type: String,
      required: [true, "can't be blank"],
    },
    category: {
      type: String,
      required: [false, "can't be blank"],
    },
    location: {
      type: String, // You can adjust the data type based on your specific needs (String, Array, Object, etc.)
      required: [true, "can't be blank"],
    },
    pictures: {
      type: Array,
      required: true,
    },
  },
  { minimize: false }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
