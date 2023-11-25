import { useEffect, useState } from "react";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import styled from "styled-components";
import { REGISTRAR } from "../environment/Consultas";
import { useNavigate } from "react-router-dom";
const ConfirmPurchasePage = styled.div`
  max-width: 600px;
  margin-top: 10px;
  padding: 20px;
  background-color: #eceaea;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AdressContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #eceaea;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #000000;
`;

const Subtitle = styled.h2`
  margin-bottom: 10px;
  color: #ff0000;
`;

const CartItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const CartItemName = styled.p`
  font-weight: bold;
  color: #000000;
`;

const CartItemDetail = styled.p`
  margin: 5px 0;
  color: #000000;
`;

const Total = styled.p`
  font-weight: bold;
  margin-top: 20px;
  color: #ff0000;
`;

const DeliverySection = styled.div`
  margin-top: 30px;
`;

const DeliveryTitle = styled.h2`
  margin-bottom: 10px;
  color: #000000;
`;

const CurrentAddressText = styled.p`
  font-weight: bold;
  color: #000000;
`;

const DeliveryInput = styled.input`
  background-color: #ffffff;
  border-color: white;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const Mensaje = styled.p`
  color: red;
`;

const PaymentTitle = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: #000000;
`;

const PaymentContainer = styled.div`
  max-width: 600px;
  margin-bottom: 10px;
  padding: 20px;
  background-color: #eceaea;
  border: 1px solid #000000;
  border-radius: 0px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PaymentText = styled.p`
  color: #000000;
`;

const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
`;

const PaymentOption = styled.label`
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
  &:hover {
    background-color: #218838;
  }
`;
const ContePurchase = styled.div``;
const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
const ContentData = styled.div`
  height: 100%;
  width: 75%;
`;
const ContenImg = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 25%;
`;
const ImgCom = styled.img`
  width: 80px;
  height: 100%;
`;
export const ConfirmPurchase = ({ item, user }) => {
  const id_user = localStorage.getItem("id_user");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id_producto: "",
    id_usuario: id_user,
  });
  const confirmarOrden = async () => {
    item.map((data) => {
      formData.id_producto = data.id_producto;
    });
    await REGISTRAR("/ordern/store", formData);
     navigate("/latestorders");
    console.log(formData);
  };
  return (
    <ContePurchase>
      <Link to="/">
        <Arrow>←</Arrow>
      </Link>
      <ConfirmPurchasePage>
        <Title>Confirm Purchase</Title>
        <Subtitle>Your cart contains:</Subtitle>
        {item.map((data) => (
          <CartItem key={data.id_producto}>
            <ContentData>
              <CartItemName>Product Name: {data.nombre}</CartItemName>
              <CartItemDetail>Quantity: 1</CartItemDetail>
              <CartItemDetail>Price: ${data.precio}</CartItemDetail>
            </ContentData>
            <ContenImg>
              <ImgCom
                srcSet={data.imagen}
                width="100px"
                height="100px"
                alt=""
              />
            </ContenImg>
          </CartItem>
        ))}
        {item.map((price) => (
          <Total key={price.id_producto}>Total: ${price.precio}</Total>
        ))}
      </ConfirmPurchasePage>
      <AdressContainer>
        <DeliverySection>
          <DeliveryTitle>Where shall we take it?</DeliveryTitle>
          <CurrentAddressText>Your current address:</CurrentAddressText>
          {user.map((use) => (
            <DeliveryInput
              type="text"
              placeholder="Fovani II Ed. A18"
              value={use.direccion}
            />
          ))}
          <Mensaje>Change your adress if necessary</Mensaje>
        </DeliverySection>
      </AdressContainer>

      <PaymentContainer>
        <PaymentTitle>Payment method ⭐</PaymentTitle>
        <PaymentText>Choose your favorite payment method</PaymentText>
        <PaymentOptions>
          <PaymentOption>
            <input type="radio" id="payWithCash" name="paymentMethod" />
            <label htmlFor="payWithCash" style={{ color: "black" }}>
              Pay with cash
            </label>
          </PaymentOption>
          <PaymentOption>
            <input type="radio" id="payWithCard" name="paymentMethod" />
            <label htmlFor="payWithCard" style={{ color: "black" }}>
              Pay with card
            </label>
          </PaymentOption>
        </PaymentOptions>
        <BuyButton onClick={confirmarOrden}>Confirm Order</BuyButton>
      </PaymentContainer>
    </ContePurchase>
  );
};
