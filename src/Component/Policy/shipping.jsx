import React from "react";
import styled from "styled-components";
// import Header from "../Header";
import Footer from "../Footer";

const Wrapper = styled.div`
  padding: 0 30%;
`;
const PolicyText = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Title = styled.div`
text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

function Index() {
  return (
    <div>
      {/* <Header /> */}
      <Wrapper>
        <Title>Shipping policy</Title>
        <br />
        <PolicyText>
          Streetswear orders are generally delivered within 10 working
          days (Working days do not include Saturday & Sunday) for all orders categorised
          as Normal Orders. Rush Orders are delivered within 5 working days.
          Customers who are concerned about meeting deadlines or who require
          their orders sooner can always contact our helpline or our community
          member. Delivery times may vary during the holiday seasons or in
          exceptional conditions where our partners find it difficult or
          dangerous to complete the delivery (Example: Bad weather conditions,
          political unrest etc).
        </PolicyText>
        <br />
        <br/>
        <br />
        <br/>
      </Wrapper>

      <Footer />
    </div>
  );
}

export default Index;
