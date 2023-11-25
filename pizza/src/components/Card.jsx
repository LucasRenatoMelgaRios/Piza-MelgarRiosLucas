import styled from "styled-components";

import promocion from "../assets/promocion.png";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: black;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardName = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  margin-bottom: 10px;
`;

const CardPrice = styled.p`
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const BuyButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin: 5px;
  &:hover {
    background-color: #218838;
  }
`;

export const Card = ({ item }) => {
  return (
    <CardContainer>
      <CardImage srcSet={item.imagen} alt={item.nombre} />
      <CardContent>
        <CardName>{item.nombre}</CardName>
        <CardDescription>{item.descripcion}</CardDescription>
        <CardPrice>${item.precio}</CardPrice>
        <Link to={"confirmordern/" + item.id_producto}>
          <BuyButton>Purchase</BuyButton>
        </Link>
      </CardContent>
    </CardContainer>
  );
};
