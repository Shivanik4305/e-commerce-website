import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("home");

  const categories = ["ladies", "gents", "kids"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <Navbar categories={categories} onCategoryChange={handleCategoryChange} />
      <ProductList category={selectedCategory} />
    </div>
  );
};

export default App;
