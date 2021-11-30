import React from "react";
import styled from "styled-components";
import { Tabs } from "../components/tabs/Tabs";

export const Login = () => {
  return (
    <StyledLogin>
      <Tabs />
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
  max-width: 36rem;
  width: 100%;
  max-height: 56rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;
