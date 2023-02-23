import React from "react";
import styled from "styled-components";

const ProductCard = ({ item }) => {
  return (
    <div>
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
