import React, { useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const ProductAll = () => {
  const getProducts = async () => {
    let url = `http://localhost:5003/products`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default ProductAll;
