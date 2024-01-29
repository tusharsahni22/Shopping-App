import React from 'react'
import styled from 'styled-components'
import {RiArrowDropRightLine} from "react-icons/ri";

const Wrapper = styled.div`
padding: 0 10%;
`;
const Box = styled.div`
height: 250px;
padding: 40px 60px;
margin: 60px 0;

box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
`;
const Details = styled.div`
display: flex;
justify-content: space-between;
`;
const Ids = styled.div`
display: flex;
flex-direction: column;
`;
const Date = styled.div`
margin-right: 20px;
font-size: 15px !important;
color: rgb(153,153,153);
`;
const OrderId = styled.div`
 margin-right: 20px;
 color: rgb(153,153,153);;
 font-size: 15px !important;
`;
const OrderDetails = styled.div`
    font-size: 15px;
    color:black;
    display: flex;
    cursor: pointer;

`;
const Line = styled.div`
width: 100%;
height: 1px;
background-color: #000000;
opacity: 0.2;
margin: 20px 0;
`;
const Product = styled.div`
display: flex;
`;
const Img = styled.img`
width: 100px;
height: 100px;
cursor: pointer;
`;
const Title = styled.div`
margin: 10px 0 0 20px;
cursor: pointer;
`;
const DateText = styled.div`
font-size: 15px;
font-weight: 700;
`;
const OrderIdText = styled.div`
font-size: 15px;
font-weight: 700;
`;
const SideArrow = styled(RiArrowDropRightLine)`
margin-left: 10px;
font-size: 20px;
color: black;
`;




function OrderHistory() {
  return (
    <Wrapper>
      <Box>
      <Details>
        <Ids>
        <div style={{display:"flex"}}>
        <Date>Order Place on:</Date>
        <DateText>January 06 2024</DateText>
        </div>
        <div style={{display:"flex"}}>
        <OrderId>Order Id: </OrderId>
        <OrderIdText>123456789</OrderIdText>
        </div>
        </Ids>
        <OrderDetails>Order Details 
        <SideArrow />
        </OrderDetails>
      </Details>
      <Line></Line>
      <Product>
        <Img/>
        <Title>Nector Maroon Hakoba Shirt - Maroon / {"S"}</Title>
      </Product>
      </Box>
    </Wrapper>
  )
}

export default OrderHistory