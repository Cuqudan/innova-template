import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Styles from "../Home/Home.module.scss";
import axios from "axios";
import ProductDash from "../../Components/ProductCard/ProductDash";
import { useFormik } from "formik";
import { type } from "@testing-library/user-event/dist/type";
const Dashboard = () => {
  const [product, setproduct] = useState([]);
  const [search, setsearch] = useState("");
  const [sorttype, setsorttype] = useState("");
  const getdata = () => {
    axios
      .get("https://664b574e35bbda10987c8d2d.mockapi.io/products")
      .then((res) => setproduct(res.data));
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {
    if (sorttype) {
      setproduct((prevdata) =>
        [...prevdata].sort((a, b) => {
          if (sorttype === "abc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        })
      );
    }
  }, [sorttype]);

  const removetoCart = (id) => {
    axios.delete(`https://664b574e35bbda10987c8d2d.mockapi.io/products/${id}`);
    setTimeout(() => {
      getdata();
    }, 300);
  };
  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      description: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post(
        "https://664b574e35bbda10987c8d2d.mockapi.io/products",
        values
      );
      setTimeout(() => {
        getdata();
      }, 300);
      formik.resetForm();
    },
  });
  const handlesort = (type) => {
    setsorttype(type);
  };
  const searchfunc = (e) => {
    setsearch(e.target.value);
  };
  const filterproduct = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.container}>
        <div className={Styles.search}>
          <input
            type="text"
            onChange={searchfunc}
            value={search}
            placeholder="Search"
          />
        </div>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="thumbnail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.thumbnail}
            placeholder="Item image link"
          />
          <input
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            placeholder="Item title"
          />
          <input
            name="description"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Item description"
          />
          <input
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
            placeholder="Item price"
          />
          <button type="submit">Submit</button>
        </form>
        <div className={Styles.filterbtns}>
          <button onClick={()=> handlesort("abc")}>A-Z</button>
          <button onClick={()=> handlesort("cba")}>Z-A</button>
        </div>
        {filterproduct &&
          filterproduct.map((item) => (
            <ProductDash
              item={item}
              removetoCart={() => removetoCart(item.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
