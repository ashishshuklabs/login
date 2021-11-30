import { useState } from "react";
import styled from "styled-components";
import { Login } from "./views/Login";

export const App = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 93rem;
  width: 100%;
  min-height: 100vh;
  background: red;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
