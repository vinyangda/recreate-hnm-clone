import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import Header from "../components/Header";
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
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
      <ProductCard />
    </div>
  );
};

export default ProductAll;

// const ProductCard = styled.div`
//   :hover {
//     width: 210px;
//   }
// `;
