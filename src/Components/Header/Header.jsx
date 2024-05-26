import React from "react";
import Styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate()
  return (
    <div className={Styles.header}>
      <div className={Styles.container}>
        <h3>INNOVA</h3>
        <nav>
          <ul>
            <li>
              <a href="" onClick={()=> navigation("/")}>HOME</a>
            </li>
            <li>
              <a href="" onClick={()=> navigation("/basket")}>BASKET</a>
            </li>
            <li>
              <a href="" onClick={()=> navigation("/wishlist")}>WISHLIST</a>
            </li>
            <li>
              <a href="" onClick={()=> navigation("/admin")}>ADMIN</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </nav>
        <div className={Styles.bars}>
        <FaBars />
        </div>
      </div>
    </div>
  );
};

export default Header;
