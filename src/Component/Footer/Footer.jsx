import React from "react"
import styled from "styled-components"
import { AiFillInstagram, AiOutlineYoutube} from 'react-icons/ai'
import { CiTwitter } from "react-icons/ci";
import { BsFacebook } from 'react-icons/bs'
import { GoArrowRight } from 'react-icons/go'
import { useNavigate } from "react-router-dom"

const Container=styled.div`
width:90%;
height: 400px;
padding: 0 5%;
background-color:#212121;
display:flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 768px) {
  display: none;
}
`;

const Wrapper=styled.div`
width:100%;
height: 380px;
background-color:#212121;
margin: 30px 0;
display:flex;
`;

const Column = styled.div`
margin-left: 5%
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
`;
const AllRight = styled.div`
background-color:#212121;
color:white;
margin-left: 5%
`;
const Policy = styled.div`
background-color:#212121;
color:white;
margin-left: 5%;
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
       <Input placeholder="Enter Email"/>
       <GoArrowRight style={{color:"white",margin:"10px 0px -3px -7px"}}/>
       </InputDiv>
       </Column>
       {/* <Column>
       <Heading>About StreetsWear</Heading>
       <Option>About Us</Option>
       <Option>Promotional Deals</Option>
       <Option>Reviews</Option>
       </Column> */}

       <Column>
       <Heading>Customer Support</Heading>
       <Option onClick={() => window.open('mailto:support@streetswear.in', '_blank')}>Contact Us</Option>
       <Option>About Us</Option>
       <Option>Help & FAQ</Option>
       </Column>

       <Column>
       <Title>
        <div>Follow us</div>
       </Title>

       <Option onClick={() => window.open('https://www.instagram.com/streetswear.in', '_blank')}><AiFillInstagram/> Instagram</Option>
       <Option onClick={() => window.open('https://www.facebook.com/streetswear.in', '_blank')}><BsFacebook/> Facebook</Option>
       <Option onClick={() => window.open('https://www.youtube.com/@streetswear_in', '_blank')}><AiOutlineYoutube/> Youtube</Option>
       <Option onClick={() => window.open('https://twitter.com/streetswear_in', '_blank')}><CiTwitter/> Twitter</Option>
       </Column>
    </Wrapper>
    <AllRight>© 2024, Streetswear India. All rights reserved. Managed By Tushar Sahni  </AllRight>
    <Policy>
    •<Buttons onClick={()=>{navigate("/policy/return&refund")}}>Return & Refund policy</Buttons>• 
      <Buttons onClick={()=>{navigate("/policy/privacy-policy")}} >Privacy policy</Buttons>• 
      <Buttons onClick={()=>{navigate("/policy/terms-of-service")}}>Terms of service</Buttons>• 
      <Buttons onClick={()=>{navigate("/policy/shipping-policy")}}>Shipping policy</Buttons> 
      </Policy>
    </Container>
  )
}

export default Footer