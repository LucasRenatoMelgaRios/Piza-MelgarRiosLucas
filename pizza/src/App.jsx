import { useState } from "react";
import { MyRouters } from "./routers/routes";
import { LoginForm } from "./components/LoginForm";
import styled from "styled-components";
function App() {
  const [login, setLogin] = useState(localStorage.getItem("logeo"));
  return <> {login ? <MyRouters /> : <Content> <LoginForm setLogin={setLogin}/> </Content>}</>;
}


export default App;

const Content = styled.div`
width: 100%;
`;