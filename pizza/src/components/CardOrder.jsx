import styled from "styled-components";

import promocion from "../assets/promocion.png";
import { format } from 'date-fns';
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

export const CardOrder = ({ item }) => {
    // Parse la cadena de fecha y hora a un objeto de fecha
    const parsedDate = new Date(item.created_at);

    // Formatee la fecha sin la hora
    const formattedDate = format(parsedDate, 'yyyy-MM-dd');
  return (
    <CardContainer>
      <CardImage srcSet={item.productos.imagen} alt={item.productos.nombre} />
      <CardContent>
        <CardName>{item.productos.nombre}</CardName>
        <CardDescription>cliente: {item.usuarios.nombre + " " + item.usuarios.apellidos}</CardDescription>
        <CardPrice>${item.productos.precio}</CardPrice>
        <CardDescription>{formattedDate}</CardDescription>
      </CardContent>
    </CardContainer>
  );
};
