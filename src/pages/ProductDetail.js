import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ProductDetail = () => {
  let { id } = useParams(); //url에 파라미터 값으로 받아서 json서버에 보내준다.
  const [product, setProduct] = useState();

  const getProduct = async () => {
    let url = `http://localhost:5003/products/${id}`; //API호출을 한다 id값은 동적인 값으로 바뀐다.
    let res = await fetch(url);
    let data = await res.json();
    setProduct(data);
    console.log(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          {" "}
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>{product?.price}₩</div>
          <button>Add Cart</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

// const Container = styled.div``;
