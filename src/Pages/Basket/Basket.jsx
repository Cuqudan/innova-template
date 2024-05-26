import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Styles from "../Home/Home.module.scss";
import axios from "axios";
import ProductBasket from "../../Components/ProductCard/ProductBasket";

const Basket = () => {
  const [product, setproduct] = useState([]);
  const getdata = () => {
    axios
      .get("https://664b574e35bbda10987c8d2d.mockapi.io/products")
      .then((res) => setproduct(res.data));
  };
  useEffect(() => {
    getdata();
  }, []);

  const removetoCart = (id) => {
    axios.delete(`https://664b574e35bbda10987c8d2d.mockapi.io/products/${id}`);
    setTimeout(() => {
        getdata()
    }, 300);
  };
  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.container}>
        {product &&
          product.map((item) => (
            <ProductBasket
              item={item}
              removetoCart={() => removetoCart(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Basket;
