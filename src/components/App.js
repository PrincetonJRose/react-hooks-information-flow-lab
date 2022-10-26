import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        onDarkModeClick = { onDarkModeClick }
        isDarkMode = { isDarkMode }
      />
      <ShoppingList />
    </div>
  );
}

export default App;
