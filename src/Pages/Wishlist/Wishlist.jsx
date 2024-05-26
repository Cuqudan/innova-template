import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Styles from "../Home/Home.module.scss";
import axios from "axios";
import ProductBWish from "../../Components/ProductCard/ProductWish";

const Wishlist = () => {
    const [product, setproduct] = useState([]);
    const getdata = () => {
      axios
        .get("https://664b574e35bbda10987c8d2d.mockapi.io/wishlist")
        .then((res) => setproduct(res.data));
    };
    useEffect(() => {
      getdata();
    }, []);
  
    const removetoWish = (id) => {
      axios.delete(`https://664b574e35bbda10987c8d2d.mockapi.io/wishlist/${id}`);
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
          <ProductBWish
            item={item}
            removetoWish={() => removetoWish(item.id)}
          />
        ))}
    </div>
  </div>
  )
}

export default Wishlist