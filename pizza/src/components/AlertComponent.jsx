import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0%);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const PrincipalContainer = styled.div`
  position: fixed;
  top: 0;
  animation: ${slideIn} 1s ease-in-out, ${slideUp} 2s ease-in-out 2s;

  left: 0;
  width: 100%;
  height: 150px;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 999999; /* Asegura que se superponga sobre todo */
  display: flex;
  align-items: center;
  justify-content: center;
  /* animation: ${slideUp} 2s ease-in-out ; */
`;

const ContainerMessage = styled.div`
  background-color: rgba(52, 152, 219, .8);
  color: white;
  font-size: 14px;
  padding: 20px;
  width: 50%;
  height: 75px;
  z-index: 99999999; /* Asegura que se superponga sobre todo */
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${slideDown} 4s ease-in-out, ${slideUp} 4s ease-in-out 4.1s;
  border-radius: 15px;
  text-align: center;
`;

export function AlertComponent({ message}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return show ? (
    <PrincipalContainer>
      <ContainerMessage>{message ?? "Mensaje"}</ContainerMessage>
    </PrincipalContainer>
  ) : null;
}
