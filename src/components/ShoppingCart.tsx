import React from "react";
import { FiShoppingCart } from "react-icons/fi";

function Icons() {
  return (
    <div className="iconMarginHorizontal shoppingCart">
      <p className="shoppingCartCount">0</p>
      <FiShoppingCart className="iconSize" />
    </div>
  );
}

export default Icons;
