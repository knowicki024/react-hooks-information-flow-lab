
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("");

  function handleDarkModeClick() {
    setDarkMode((darkMode) => !darkMode);
  }

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    console.log("Selected Category:", selectedCategory);
  };

  return (
    <div className={"App " + (darkMode ? "dark" : "light")}>
      <header>
        <Header darkMode={darkMode} onDarkModeClick={handleDarkModeClick} />
      </header>
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
