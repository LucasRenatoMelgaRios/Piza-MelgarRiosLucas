import styled from "styled-components";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";
import { GET } from "../environment/Consultas";

export function Products() {
  const [data,setData] = useState([]);
  const cualquiercosa = () =>{
    console.log("Agregar");
  }
  useEffect(()=>{
    GET("/productos/index",setData);
  },[])
  return (
    <Content>
      {data.map((product) => (
        <Card
          key={product.id_producto}
          item={product}
          event={cualquiercosa}
        />
      ))}
    </Content>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: auto;
`;
