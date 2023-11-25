import styled from "styled-components"
import { GET } from "../environment/Consultas";
import { CardOrder } from "../components/CardOrder";
import { useEffect, useState } from "react";

export function LatestOrders (){
  const [data,setData] = useState([]);
  const id_user = localStorage.getItem("id_user");
  const cualquiercosa = () =>{
    console.log("Agregar");
  }
  useEffect(()=>{
    GET(`/ordern/index/${id_user}`,setData);
  },[])
    return(
        <Content>
     {data.map((order) => (
        <CardOrder
          key={order.id_producto}
          item={order}
          event={cualquiercosa}
        />
      ))}
        </Content>
    )
}
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  color: black;
`;