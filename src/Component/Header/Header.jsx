import React from "react";
import styled from "styled-components";
import SlideShow from "./Slide";
import { IoIosSearch } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const Wrapper = styled.div`
`;
const Slide = styled.div`
  height: 36px;
  background-color:#212121;
`;
const Members = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 50px ;
background-color: #F4F5F7;
height: 30px;
`;

const Content =styled.div`
font:12px roboto;
padding: 7px 5px;
`;

const Menu =  styled.div`
display:flex;
justify-content: space-between;
padding: 16px 120px;
width: auto;
`;
const Search =  styled.div`
display: flex;
justify-content: space-between;
border: 1px solid #9FA6B2;
width: 100%;
height: 40px;
padding-right: 18px;
padding-left: 16px;
align-items: center;
border-radius: 7px;

`;
const Input =  styled.input`
border:none;
width: 100%;
font-size: 15px;
outline: none;
`;
const Img = styled.img`
width:200px;
height:50px;
`;
const User = styled.div`
  display: flex;
  width: auto;
`
const Tags= styled.div`
padding :0 34px 0 0;
display: flex;
 `;
function Header() {
  return (
    <Wrapper>
      <Slide><SlideShow /></Slide>
      <Members>
        <Content>India</Content>
        <Content>Contact Us</Content>
        <Content>Student Discount</Content>
        <Content>Rewards</Content>
        <Content>Help</Content>
      </Members>
      <Menu>
          <Img src="./logo.jpg" alt="logo"/>
        <Search>
        <Input type="text" placeholder="Find something you will love!"/>
        <IoIosSearch style={{height:"26px",width:"20px"}}/>
        </Search>
        <User>
          <Tags>

            <BiUserCircle style={{width:"21px",height:"21px"}}/>
          <div style={{fontSize:"10px"}}>JOIN & GET 20% OFF </div>
          </Tags>
          <Tags><BsHeart style={{width:"21px",height:"21px"}}/></Tags>
          <AiOutlineShoppingCart style={{width:"21px",height:"21px"}}/>
          
          
          
          
        </User>
      </Menu>
    </Wrapper>
  );
}

export default Header;
