import React from "react";

const productsData = {
  ladies: [
    { id: 1, name: "Dress", price: "$50" },
    { id: 2, name: "Handbag", price: "$30" },
    { id: 3, name: "Shoes", price: "$70" },
  ],
  gents: [
    { id: 1, name: "T-shirt", price: "$25" },
    { id: 2, name: "Jacket", price: "$80" },
    { id: 3, name: "Sneakers", price: "$60" },
  ],
  kids: [
    { id: 1, name: "Toy Car", price: "$15" },
    { id: 2, name: "T-shirt", price: "$20" },
    { id: 3, name: "Shoes", price: "$25" },
  ],
};

const ProductList = ({ category }) => {
  const products = category === "home" ? [] : productsData[category];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{category === "home" ? "Welcome to Our Store!" : `${category.charAt(0).toUpperCase() + category.slice(1)} Collection`}</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        {products.length === 0 ? (
          <p>Select a category to view products.</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                width: "200px",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
