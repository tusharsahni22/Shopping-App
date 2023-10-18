import React from "react"
import styled from "styled-components"
import { AiFillInstagram,AiFillYoutube,AiOutlineTwitter } from 'react-icons/ai'
import { FaPinterest } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { GoArrowRight } from 'react-icons/go'

const Wrapper=styled.div`
width:100%;
height: 480px;
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
const Option = styled.div`
color:white;
display:flex;
margin:20px 0;
justify-content: space-between;
width: 200px;
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

function Footer() {
  return (
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
       <Option>About InkBox</Option>
       <Option>About</Option>
       <Option>Promotional Deals</Option>
       <Option>Reviews</Option>
       <Option>Carrer</Option>
       <Option>Press</Option>
       </Column>

       <Column>
       <Option>Customer Care</Option>
       <Option>Tracking</Option>
       <Option>Shipping</Option>
       <Option>Return</Option>
       <Option>Help & FAQ</Option>
       <Option>Return</Option>
       </Column>

       <Column>
       <Option>
        <div>Other</div>
        <AiFillInstagram/>
        <FaPinterest/>
        <BsFacebook/>
        <AiFillYoutube/>
        <AiOutlineTwitter/>
       </Option>
       <Option>About</Option>
       <Option>Carrer</Option>
       <Option>Partnership</Option>
       <Option>Inkbox Community</Option>
       <Option>Press</Option>
       </Column>
    
    </Wrapper>
  )
}

export default Footer