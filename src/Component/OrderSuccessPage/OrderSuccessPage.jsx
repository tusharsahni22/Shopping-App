import React from 'react';
import styled from 'styled-components';
import { RxCodesandboxLogo } from "react-icons/rx";

const SuccessContainer = styled.div`
display: flex;
flex-direction: column;
padding: 40px 60px;
height: max-content;
border-radius: 15px;
box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
`;
const OrderLogo = styled(RxCodesandboxLogo)`
  font-size: 40px;
  color: black;
`;

const Head = styled.div`
color: black;
margin-bottom: 20px;
font-size: 35px;
font-weight: bold;
`;

const Title = styled.div`
  color: black;
`;
const OrderNo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const OrderUpdates = styled.div`
  color: black;
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  border : 2px solid #f3f3f3;
  height: 40px;
  padding: 25px;
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width: 400px;
  height: 600px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  border : 2px solid #f3f3f3;
  padding: 25px;
`;
const Lable = styled.div`
  color: black;
  font-weight: bold;
`;
const Details = styled.div`
  color: black;
  font-size: 15px;
`;
const Line = styled.div`
  border: 2px solid #f3f3f3;
  width: 100%;
`;

function OrderSuccessPage() {
  return (
    <SuccessContainer>
      <Head>Order Placed</Head>
      <OrderNo>
      <OrderLogo />
      <div>
      <p>Order #{"123"}</p>
      <Title>Thank you {"name"}!</Title>
      </div>
      </OrderNo>
      <OrderUpdates>
        <p>Order updates will be sent to your email address.</p>
        <p>For any queries, please contact our customer support.</p>
      </OrderUpdates>
      <ImageContainer>
      <Img src="./thanksforshopping.webp" alt="order placed" />
      </ImageContainer>
      <ContactDetails>
        <div style={{display:"flex", gap:"10px"}}>
        <Lable>Contact</Lable>
        <Details>email@GRMIAL.COM</Details>
        </div>
        <Line/>
        <div style={{display:"flex", gap:"10px"}}>
        <Lable>Address</Lable>
        <Details>Rajendra nahgae sector 2 sahibadbabd </Details>
        </div>
        <Line/>
        <div style={{display:"flex", gap:"10px"}}>
        <Lable>Payment</Lable>
        <Details>Cash</Details>
        </div>
        
      </ContactDetails>
      
    </SuccessContainer>
  );
}

export default OrderSuccessPage;