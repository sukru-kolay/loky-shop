import React from 'react'
import ShoppingCart from "../components/ShoppingCart";
import logo from "../assets/logo.jpg";
import UserIcon from "../components/UserIcon";
import SearchIcon from "../components/SearchIcon";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Link to="/">
        <img src={logo} className="siteLogo" />
        </Link>
        <div className="headerIconsContainer">
        <SearchIcon />
        <UserIcon />
        <ShoppingCart />
        </div>
    </div>
  )
}

export default Header