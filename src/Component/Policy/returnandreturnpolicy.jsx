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
  font-size: 3rem;
`;

const TitleBold = styled.div`
  font-weight: bold;
`;

function Index() {
  return (
    <div>
      {/* <Header /> */}
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
              We offer 7 days hassle-free returns & exchange from the date of delivery and a further 5-7 days for the returned product(s) to reach us. We also offer reverse pick-up services. A reverse shipment fee of Rs 10 will be deducted at the time of refund per order, regardless of the number of items within that order. This means that if an order contains multiple items, only a single deduction of Rs 10 will be made for the entire order, not on each individual clothing item.
            </li>
            <br />

            <li>
            Pick-up will be attempted twice. If the courier company is unable to pick up the shipment. You will have to send the shipment back to the company address. Reverse Pick Up is subject to the availability of the service in your area pin code.
            </li>
            <br />
            <li>
            Please return your product(s) in the same condition as it was shipped. If the products are returned in poor condition or have clearly been worn, a refund would not be provided.
            </li>
            <br />
            <li>
            Kindly allow 7 days for the return to be processed and the amount to be shown in your bank account.
            </li>
            <br />
            <li> 
            Shipping Charges are Non-Refundable
            </li>
            <br />
            <li>
            You can get in touch with us about any issues at our customer support portal by dropping a mail on support@streetswear.in All queries will be solved between Monday-Sunday, 10 am- 8 pm. All pending queries will be solved on priority the next day. 
            </li>
            <br />
            <li>
            Please note that we do not solve customer queries on any social media. 
            </li>
            <br />
            <li>
              Cancellations will only be possible till the order has not been dispatched from our warehouse.
            </li>
            <br />
            <li>
            Kindly allow 7 days for the return to be processed and the amount to be shown in your bank account.
            </li>
            <br />
            <li>
            Kindly allow 7 days for the return to be processed and the amount to be shown in your bank account.
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
          <TitleBold> REFUNDS FOR FREE PRODUCT DEALS </TitleBold>
          <br />
          <br />Any items purchased during a BOGO Sale (Buy 1 Get 1 Free) or any such promotions wherein free products are included, such orders will not be eligible for any returns.
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
