import React, { useEffect } from 'react'
import styled from 'styled-components'
import {RiArrowDropRightLine} from "react-icons/ri";
import { getOrderDetails } from '../Services/profile';

const Wrapper = styled.div`
width: 100%;

`;
const Box = styled.div`
padding: 40px 60px;
// margin: 60px 0;
border-radius: 15px;
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
const Datee = styled.div`
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
margin:0 0 20px 0;
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
const Welcome = styled.div`
font-size: 30px;
color: var(--contentTextColor);
font-weight: 400;
letter-spacing: 0.025em;
color: #000000;
margin-top: 15px;
margin-bottom: 30px;
width: 100%;
text-align: center;
`;
const OrderContainer = styled.div`
height: 100vh;
overflow-y: auto;
gap: 20px;
display: flex;
flex-direction: column;
padding: 10px 20px;
`;

function OrderHistory({name, greeting}) {
  const [orderList, setOrderList] = React.useState([])
  const [OrderDetailsExpanded, setOrderDetailsExpanded] = React.useState(false)
  const convertToDateFormat = (data) => {
    const date = new Date(data);
    const dateString = date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    return dateString;
  }
  useEffect(()=>{
    getOrderDetails().then((res)=>{
      setOrderList(res.data)
      console.log("first",res.data)
      console.log("first",orderList)
    }).catch((err)=>{
      console.log("error while getting order",err)
    })
  },[])

  return (
    <Wrapper>
      
      <Welcome> {greeting}! {name?.split(" ")[0]}</Welcome>
      <OrderContainer style={{height:"100vh",overflowY:"auto"}}>
      {orderList.map((order)=>(
      <Box key={order._id}>
      <Details>
        <Ids>
        <div style={{display:"flex"}}>
        <Datee>Order Place on:</Datee>
        <DateText>{convertToDateFormat(order.createdAt)}</DateText>
        </div>
        <div style={{display:"flex"}}>
        <OrderId>Order Id: </OrderId>
        <OrderIdText>{order._id}</OrderIdText>
        </div>
        </Ids>
        <OrderDetails onClick={()=>{setOrderDetailsExpanded(!OrderDetailsExpanded)}}>Order Details 
        <SideArrow />
        </OrderDetails>
      </Details>
      <Line></Line>
      {order.items.map((item)=>(
      <Product key={item._id}>
        <Img src={item.product.mainPicture}/>
        <Title>{item.product.title} / {item.size.toUpperCase()} / {item.color.toUpperCase()} </Title>
      </Product>))}
      {OrderDetailsExpanded ? <div>Order Details</div> : null }
      </Box>
      ))}
      {/* {orderList.length===0 && <div style={{textAlign:"center",marginTop:"20px"}}>No Orders Found</div>} */}
      </OrderContainer>
    </Wrapper>
  )
}

export default OrderHistory