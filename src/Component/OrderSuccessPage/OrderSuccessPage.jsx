import React, { useEffect } from 'react';
import styled from 'styled-components';
import { RxCodesandboxLogo } from "react-icons/rx";
import { useLocation,useNavigate } from 'react-router';
import { clearCart } from '../reducers/cart';
import { useDispatch } from 'react-redux';

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
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 15px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  width: fit-content;
  &:hover {
    background-color: #333;
  }
`;

function OrderSuccessPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { address , paymentMode , orderId, email} = state||{}
  useEffect(() => {
    window.scrollTo(0, 0);
   dispatch(clearCart());
    
  },[]);

  return (
    <SuccessContainer>
      <Head>Order Placed</Head>
      <OrderNo>
      <OrderLogo />
      <div>
      <p>Order #<strong>{orderId}</strong></p>
      <Title>Thank you {address.name}!</Title>
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
        <Details>{email}</Details>
        </div>
        <Line/>
        <div style={{display:"flex", gap:"10px"}}>
        <Lable>Address</Lable>
        <Details>{address.address} {address.landmark}</Details>
        <Details>{address.pincode} {address.city} {address.state}</Details>
        </div>
        <Line/>
        <div style={{display:"flex", gap:"10px"}}>
        <Lable>Payment Mode</Lable>
        <Details>{paymentMode.toUpperCase()}</Details>
        </div>
        
      </ContactDetails>
      <Button onClick={()=>{navigate("/")}}>Continue Shopping</Button>
      
    </SuccessContainer>
  );
}

export default OrderSuccessPage;