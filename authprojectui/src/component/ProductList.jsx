import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");

      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Product List</h2>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 border">ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Quantity</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-3 border">{product.id}</td>
              <td className="p-3 border">{product.name}</td>
              <td className="p-3 border">{product.price}</td>
              <td className="p-3 border">{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
