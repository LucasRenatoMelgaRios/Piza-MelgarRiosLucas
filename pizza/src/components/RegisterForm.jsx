// RegisterForm.js
import { useState } from "react";
import styled from "styled-components";
import {REGISTRAR } from "../environment/Consultas";

const RegisterWrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
`;

const FormContainer = styled.div`
  width: 500px;
  padding: 10px;
  height: 90%;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 382px;
  padding: 8px;
  margin-bottom: 3px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 5px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const SelectLabel = styled.p`
  text-align: left;
  margin-bottom: 3px;
`;

const InputLabel = styled.p`
  text-align: left;
  margin-bottom: 2px;
  font-size: 12px;
`;

export const RegisterForm = ({activeModal}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    dni: "",
    direccion: "",
    telefono: "",
    correo: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const isEmpty = Object.values(formData).some((value) => value === "");
  const register = () => {
    if (isEmpty) {
      setRespuestas("rellene todos los datos");
      changeValueIsVisible();
      return;
    }
    REGISTRAR("/usuario/store", formData, activeModal);
};

  return (
    <RegisterWrapper>
      <FormContainer>
        <Title>Register here</Title>
        <InputLabel>First Name⭐</InputLabel>
        <Input
          type="text"
          placeholder="e.g John"
          onChange={handleInputChange}
          name="nombre"
          required
        />

        <InputLabel>Surname⭐</InputLabel>
        <Input
          type="text"
          placeholder="e.g Ramirez"
          onChange={handleInputChange}
          name="apellidos"
          required
        />

        <SelectLabel>Gender:</SelectLabel>
        <Select>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <InputLabel>Email Address⭐</InputLabel>
        <Input
          type="email"
          placeholder=""
          onChange={handleInputChange}
          name="correo"
          required
        />

        <InputLabel>ID number</InputLabel>
        <Input
          type="text"
          name="dni"
          onChange={handleInputChange}
          placeholder="Accumulate bonus points"
        />
        <InputLabel>address</InputLabel>
        <Input
          type="text"
          name="direccion"
          onChange={handleInputChange}
          placeholder="Accumulate bonus points"
        />
        <InputLabel>Phone Number⭐</InputLabel>
        <Input
          type="text"
          name="telefono"
          onChange={handleInputChange}
          placeholder="So we can contact you"
          required
        />

        <InputLabel>Password⭐</InputLabel>
        <Input
          type="password"
          name="password"
          onChange={handleInputChange}
          placeholder=""
          required
        />
        <Button type="submit" onClick={register}>Complete Registration</Button>
      </FormContainer>
    </RegisterWrapper>
  );
};
