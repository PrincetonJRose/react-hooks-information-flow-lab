import React, { useState, useEffect } from "react";
import Item from "./Item";
import Filter from './Filter'
import itemData from "../data/items";

function ShoppingList( ) {

  const [ items, setItems ] = useState( [] )

  useEffect( () => {
    let cartToggleAddedToItems = itemData.map( item => {
      return {...item, isInCart: false}
    })
    setItems( cartToggleAddedToItems )
  }, [])

  function handleAddToCartClick( cartedItem ) {
    let toggleItemInCart = items.map( item => {
      if ( item.id === cartedItem.id )
        return {...cartedItem, isInCart: !cartedItem.isInCart }
      else return item
    })

    setItems( toggleItemInCart )
  }

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter( item => item.category === selectedCategory || selectedCategory === "All" )
  
  return (
    <div className="ShoppingList">
      <Filter
        onCategoryChange = { handleCategoryChange }
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item = { item } handleAddToCartClick = { handleAddToCartClick } />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
