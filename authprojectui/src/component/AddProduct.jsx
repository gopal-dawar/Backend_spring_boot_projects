import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:8080/products",
        product
      );

      alert("Product Added Successfully");

      setProduct({
        name: "",
        price: "",
        quantity: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >

        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Product
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={product.quantity}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add Product
        </button>

      </form>

    </div>
  );
};

export default AddProduct;