import React from "react";
import Homepage from "./Homepage";
import styled from "styled-components";
import Header from "../Header";

const Wrapper = styled.div``;

function Index() {
  return (
    <Wrapper>
      <Header />
      <Homepage />
    </Wrapper>
  );
}

export default Index;
