import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState();
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log(searchQuery, "??");
    //query값을 변환이 되는지 확인 받아오는지 확인한다.
    let url = `https://my-json-server.typicode.com/vinyangda/recreate-hnm-clone/products?q=${searchQuery}`;
    //배포 주의사항 현제 url은 내 로컬에서만 적용되고 있기 때문에 이대로 배포할 경우 다른사람에게는 보여지지 않는다
    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
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
