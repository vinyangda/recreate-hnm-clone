import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, key }) => {
  const navigate = useNavigate();

  const goToProduct = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div onClick={goToProduct} key={key}>
      <Img src={item?.img} />
      <div>{item?.choice == true ? "Conscious Choice" : ""}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new == true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard;

const Img = styled.img`
  width: 200px;
`;
