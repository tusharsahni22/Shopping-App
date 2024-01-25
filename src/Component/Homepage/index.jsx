import React from "react";
import Homepage from "./Homepage";
import styled from "styled-components";
// import Header from "../Header";
import Footer from "../Footer";

const Wrapper = styled.div``;

function Index() {
  return (
    <Wrapper>
      {/* <Header /> */}
      <Homepage />
      <Footer/>
    </Wrapper>
  );
}

export default Index;
