import React from "react"
import styled from "styled-components"
import { AiFillInstagram} from 'react-icons/ai'
// import { FaPinterest } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { GoArrowRight } from 'react-icons/go'
import { useNavigate } from "react-router-dom"

const Container=styled.div`
width:100%;
height: 400px;
background-color:#212121;
display:flex;
flex-direction: column;
justify-content: space-between;
`;

const Wrapper=styled.div`
width:100%;
height: 380px;
background-color:#212121;
display:flex;
`;

const Column = styled.div`
margin:30px;
`;
const Title = styled.div`
color:white;
margin:20px 0;

`;
const Message = styled.div`
color:white;
margin:20px 0;

`;
const InputDiv = styled.div`
border:1px solid white;
width:200px;
height:35px;
margin-top: 40px;
border-radius: 7px;

`;
const Heading = styled.div`
color:white;
display:flex;
margin:20px 0;
gap: 10px;
/* justify-content: space-between; */
width: 200px;
`;
const Option = styled.div`
color:white;
display:flex;
margin:20px 0;
gap: 10px;
/* justify-content: space-between; */
width: 200px;
&:hover{
  cursor: pointer;
}
`;
const Input = styled.input`
background-color:#212121;
outline: none;
border: none;
color: white;
margin: 10px;
placeholderTextColor:white
&::placeholder {
        color: white;
    }
`;
const AllRight = styled.div`
background-color:#212121;
color:white;
margin:0 30px;
`;
const Policy = styled.div`
background-color:#212121;
color:white;
margin:0 30px;
display: flex;
gap: 10px;
align-items: center;
`;
const Buttons = styled.div`
color:white;
margin:20px 0;
&:hover{
  cursor: pointer;
}
`;


function Footer() {
  const navigate = useNavigate()
  return (
    <Container>
    <Wrapper>
       <Column>
       <Title>Be the first to know</Title>
       <Message>Receive email updates about our latest collaborations, new products & exclusive discounts.</Message>
       <InputDiv>
       <Input placeholder="Enter Email" placeholderTextColor="white"/>
       <GoArrowRight style={{color:"white",margin:"10px 0px -3px -7px"}}/>
       </InputDiv>
       </Column>
       <Column>
       <Heading>About StreetsWear</Heading>
       <Option>About Us</Option>
       <Option>Promotional Deals</Option>
       <Option>Reviews</Option>
       {/* <Option>Carrer</Option>
       <Option>Press</Option> */}
       </Column>

       <Column>
       <Heading>Customer Care</Heading>
       <Option>Tracking</Option>
       <Option>Shipping</Option>
       <Option>Return</Option>
       <Option>Help & FAQ</Option>
       </Column>

       <Column>
       <Title>
        <div>Follow us</div>
       </Title>
       <Option><AiFillInstagram/> Instagram</Option>
       <Option><BsFacebook/> Facebook</Option>
       </Column>
    </Wrapper>
    <AllRight>© 2023, Streetswear India. All rights reserved.</AllRight>
    <Policy>
    •<Buttons onClick={()=>{navigate("/policy/return&refund")}}>Return & Refund policy</Buttons>• 
      <Buttons>Privacy policy</Buttons>• 
      <Buttons>Terms of service</Buttons>• 
      <Buttons onClick={()=>{navigate("/policy/shipping-policy")}}>Shipping policy</Buttons> 
      </Policy>
    </Container>
  )
}

export default Footer