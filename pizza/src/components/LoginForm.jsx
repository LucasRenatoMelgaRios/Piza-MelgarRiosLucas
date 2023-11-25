// LoginForm.js
import styled from "styled-components";
import { RegisterForm } from "./RegisterForm";
import { useEffect, useState } from "react";
import { POST } from "../environment/Consultas";
import { AlertComponent } from "./AlertComponent";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginFormContainer = styled.div`
  width: 300px;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #62b24d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5ea04e;
  }
`;
const RegisterContainer = styled.div`
  width: 360px;
  text-align: center;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const RegisterButton = styled.button`
  width: 310px;
  padding: 10px;
  background-color: #62b24d;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #5ea04e;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;
const Modal = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #3c020264;
  z-index: 500;
  position: fixed;
`;
const Arrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
`;
export function LoginForm({ setLogin }) {
  const [active, setActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const activeModal = () => {
    setActive(!active);
  };
  const [formData, setFormData] = useState({
    correo: "",
    password: "",
  });

  const [respuestas, setRespuestas] = useState();
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const isEmpty = Object.values(formData).some((value) => value === "");
  function changeValueIsVisible() {
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  }
  const Logeo = () => {
      if (isEmpty) {
        setRespuestas("rellene todos los datos");
        changeValueIsVisible();
        return;
      }
      POST("/usuario/login", formData, setRespuestas, changeValueIsVisible() , setLogin);
  };

  return (
    <LoginWrapper>
      {isVisible ? <AlertComponent message={respuestas} /> : null}
      <FormContainer>
        <LoginFormContainer>
          <Title>Login</Title>
            <Input
              type="text"
              placeholder="some@gmail.com"
              name="correo"
              onChange={handleInputChange}
              required
            />
            <Input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleInputChange}
              required
            />
            <Button onClick={Logeo}>Log in</Button>
        </LoginFormContainer>

        <RegisterContainer>
          <p>Don't have an account yet?</p>
          <RegisterButton onClick={activeModal}>Register</RegisterButton>
        </RegisterContainer>
      </FormContainer>
      {active ? (
        <Modal>
          <Arrow onClick={activeModal} />
          <RegisterForm setRespuestas={setRespuestas} activeModal={activeModal}  changeValueIsVisible={changeValueIsVisible}/>
        </Modal>
      ) : null}
    </LoginWrapper>
  );
}
