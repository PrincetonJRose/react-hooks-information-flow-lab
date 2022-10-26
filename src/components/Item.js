import React from "react";

function Item( props ) {
  // const [isInCart, setIsInCart] = useState(false);

  // function handleAddToCartClick() {
  //   setIsInCart((isInCart) => !isInCart);
  // }

  // console.log( props.item )

  const { name, category, id, isInCart } = props.item

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={ () => props.handleAddToCartClick( props.item ) }
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
