import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const NavBar = () => {
  const { showCart, setshowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p className="product-name">
        <Link href="/">SP Trends</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => setshowCart(true)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
