import React from "react";

const Navbar = ({ categories, onCategoryChange }) => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li
          style={{
            margin: "0 15px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
          onClick={() => onCategoryChange("home")}
        >
          Home
        </li>
        {categories.map((category) => (
          <li
            key={category}
            style={{
              margin: "0 15px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
            onClick={() => onCategoryChange(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
