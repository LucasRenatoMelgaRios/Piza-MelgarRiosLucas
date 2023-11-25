import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LatestOrders } from "../pages/LatestOrders";
import { Sidebar } from "../components/SideBar";
import { Products } from "../pages/Products";
import styled from "styled-components";
import { ConfirmOrdern } from "../pages/ConfirmOrdern";

export function MyRouters() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Ruta>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/latestorders" element={<LatestOrders />} />
          <Route path="/confirmordern/:id" element={<ConfirmOrdern />} />
        </Routes>
      </Ruta>
    </BrowserRouter>
  );
}

const Ruta = styled.main`
position: relative;
  width: calc(100vw - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin-left: 200px;
  overflow: hidden;
  transition: all 0.5s ease;
  @media (max-width: 32em) {
    width: 100%;
    margin-left: 0;
  }
`;
