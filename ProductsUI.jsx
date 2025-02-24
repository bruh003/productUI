import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [products] = useState([
    { name: "Puffed Cotton Jacket", tags: "Unisex, Big", var: 3, price: "$45.00", stock: 999, low: 500 },
    { name: "Blue Faux Leather", tags: "Unisex, Big", var: 3, price: "$45.00", stock: 1099, low: 500 },
    { name: "Tibul Wambbit Vest", tags: "Unisex, Big", var: 1, price: "$45.00", stock: 998, low: 500 },
    { name: "Braver Bomber Jacket", tags: "Unisex, Big", var: 2, price: "$45.00", stock: 998, low: 500 },
    { name: "Olive Grace Vest", tags: "Unisex, Big", var: 4, price: "$45.00", stock: 750, low: 500 },
    { name: "Black Denim Jacket", tags: "Unisex, Big", var: 2, price: "$45.00", stock: 510, low: 500 },
    { name: "Army Green Jacket", tags: "Unisex, Big", var: 5, price: "$45.00", stock: 500, low: 500 },
  ]);

  return (
    <div className="container">
      <h2>Products</h2>
      <button className="active-button">Active</button>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Tags</th>
            <th>Var</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td><input type="checkbox" /> {product.name}</td>
              <td>{product.tags}</td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
