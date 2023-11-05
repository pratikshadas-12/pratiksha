import React from "react";
import styled from "styled-components";
import { NavBar } from "./components/NavBar";

import { Controller } from "./components/Controller";
import { AlgoDisplay } from "./components/AlgoDisplay";
import { Info } from "./components/Info";

const Container = styled.div`
  margin: 0 10px;
  min-height: calc(100vh - 50px);
  position: relative;
  margin-bottom: 50px;
`;

export default function Sort() {
  return (
    <Container>
      <NavBar />
      <Controller />
      <AlgoDisplay />
      <Info />
    </Container>
  );
}
