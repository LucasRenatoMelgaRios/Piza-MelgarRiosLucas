import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ConfirmPurchase } from "../components/ConfirmPurchasePage";
import { GET } from "../environment/Consultas";

export function ConfirmOrdern() {
    const { id } = useParams();
    const [id_user, setId_user] = useState(localStorage.getItem("id_user"));
    const [item,setItem] = useState([]);
    const [user,setUser] = useState([]);
    useEffect(()=>{
      GET(`/productos/show/${id}`,setItem);
      GET(`/usuario/show/${id_user}`,setUser);
    },[])
    
  return (
    <Content>
         <ConfirmPurchase item={item} user={user} />
    </Content>
  );
}
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  color: black;
`;
