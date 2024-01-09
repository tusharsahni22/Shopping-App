import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Wrapper = styled.div`
  padding: 0 30%;
`;
const PolicyText = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Title = styled.div`
  font-size: 3rem;
`;

const TitleBold = styled.div`
  font-weight: bold;
`;

function Index() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Title>Return & Refund policy</Title>
        <PolicyText>
          <br />
          <TitleBold> Definitions and key terms </TitleBold>
          <br />
          To help explain things as clearly as possible in this Return & Refund
          Policy, every time any of these terms are referenced, are strictly
          defined as:
          <ul>
            <br />
            <li>
              Company: when this policy mentions “Company,” “we,” “us,” or
              “our,” it refers to streetswear, that is responsible for your
              information under this Return & Refund Policy.
            </li>
            <br />

            <li>
              Customer: refers to the company, organization or person that signs
              up to use the streetswear Innovations Private Limited Service to
              manage the relationships with your consumers or service users.
            </li>
            <br />
            <li>
              Device: any internet connected device such as a phone, tablet,
              computer or any other device that can be used to visit streetswear
              and use the services.
            </li>
            <br />
            <li>
              Service: refers to the service provided by streetswear as
              described in the relative terms (if available) and on this
              platform.
            </li>
            <br />
            <li>
              Website: streetswear’s site, which can be accessed via this URL:
              www.streetswear.in
            </li>
            <br />
            <li>
              You: a person or entity that is registered with streetswear to use
              the Services.
            </li>
            <br />
          </ul>
          <br />
          <TitleBold> Return & Refund Policy </TitleBold>
          <br />
          <br />
          Thanks for shopping at streetswear. We appreciate the fact that you
          like to buy the stuff we build. We also want to make sure you have a
          rewarding experience while you’re exploring, evaluating, and
          purchasing our products. As with any shopping experience, there are
          terms and conditions that apply to transactions at streetswear. We’ll
          be as brief as our attorneys will allow. The main thing to remember is
          that by placing an order or making a purchase at streetswear, you
          agree to the terms set forth below along with streetswear’s Privacy
          Policy.
          <br />
          <br />
          streetswear goes to great lengths to ensure that all orders are
          fulfilled accurately and on time and are of the highest quality.
          Accordingly, streetswear accepts returns and will refund
          payment/initiate returns (Depending on the users preference) if and
          when customers are disappointed by streetswear merchandise for one of
          the following reasons: 1. The Merchandise itself is flawed - This
          includes - incorrect sizing, damaged fabric or a product with any
          manufacturing defect. 2. The product has been delivered after 10
          working days (Without streetswear informing the customer in advance).
          3. The design of the final product is different from the final design
          requested by the customer. As a rule, streetswear does not encourage
          returns/replacements for any reason apart from those stated above.
          <br />
          <br />
          <TitleBold> Your Consent </TitleBold>
          <br />
          By using our website, registering an account, or making a purchase,
          you hereby consent to our Return & Refund Policy and agree to its
          terms.
          <br />
          <br />
          <br />
          <TitleBold>Changes To Our Return & Refund Policy </TitleBold>
          <br />
          <br />
          Should we update, amend or make any changes to this document so that
          they accurately reflect our Service and policies. Unless otherwise
          required by law, those changes will be prominently posted here. Then,
          if you continue to use the Service, you will be bound by the updated
          Return & Refund Policy. If you do not want to agree to this or any
          updated Return & Refund Policy, you can delete your account.
          <br />
          <br />
          <br />
          <TitleBold> Contact Us </TitleBold>
          <br />
          <br />
          If, for any reason, You are not completely satisfied with any good or
          service that we provide, do not hesitate to contact us and we will
          discuss any of the issues you are going through with our product.
          <br />
          <br />
          <ul>
            <li>Via Email: support@streetswear.in</li>
            <br />
            <li>
              Via this Link: 
              <a
                href="https://www.streetswear.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{paddingLeft:"5px"}}
              >
               streetswear.in
              </a>
            </li>
          </ul>
          <br />
          <br />
        </PolicyText>
      </Wrapper>

      <Footer />
    </div>
  );
}

export default Index;
