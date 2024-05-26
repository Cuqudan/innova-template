import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import SectionInnova from "../../Components/Sections/SectionInnova";
import Styles from "./Home.module.scss";
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
const Home = () => {
  const [product, setproduct] = useState([]);
  const getdata = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setproduct(res.data.products));
  };
  useEffect(() => {
    getdata();
  }, []);
  const addtoCart = (data) => {
    axios.post("https://664b574e35bbda10987c8d2d.mockapi.io/products", data);
  };
  const addtoWish = (data) => {
    axios.post("https://664b574e35bbda10987c8d2d.mockapi.io/wishlist", data);
  };
  return (
    <div className={Styles.home}>
      <Header />
      <SectionInnova />
      <div className={Styles.container}>
        {product &&
          product.map((item) => (
            <ProductCard
              item={item}
              addtoCart={() => addtoCart(item)}
              addtoWish={() => addtoWish(item)}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
