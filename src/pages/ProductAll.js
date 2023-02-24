import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState();

  const getProducts = async () => {
    let url = `http://localhost:5003/products`;
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <Container>
        <Row>
          {productList?.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} key={menu.id} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;

// 상품 디테일 페이지를 눌렀을 때, 로그인이 안된 경우 로그인 페이지가 보인다.
// 상품 디테일 페이지를 눌렀을 때, 로그인이 된 경우 상품 디테일 페이지가 보인다.
