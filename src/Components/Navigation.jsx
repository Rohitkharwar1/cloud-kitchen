import React from "react";
import "./Navigation.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Navigation = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
          <span>GHAR KI RASOI</span>
        </div>
        <div className="list">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              {" "}
              <a href="/">Food Items</a>
            </li>
            <li>
              <a href="/">Chef</a>
            </li>
          </ul>
        </div>
        <div className="rightSideNav">
          <div>
            {" "}
            <FaShoppingCart className="cart" size={40} />
          </div>

          <button className="btn">Login</button>
          <div
            className="hello
          "
          >
            {" "}
            <FaMagnifyingGlass className="search" size={40} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
