import React from 'react'
import { BiCart } from 'react-icons/bi';
import styled from 'styled-components'

const Wrapper = styled.div`
margin-bottom: 100px;
padding: 0 50px;
`;
const Products = styled.div`
display: flex;
overflow-x: scroll;
`;
const Heading = styled.div`
font:18px antique-olive;
margin-bottom: 40px;
font-weight: 800;

`;
const Service = styled.div`
display: flex;
justify-content: space-between;

`;
const Title = styled.div`


`;
const Price = styled.div`

`;
const Size = styled.div`

`;
const Img =styled.img`
width: 190px;
height: 240px;
`;

function Whatsnew() {
  return (
    <Wrapper>
        <Heading>New In</Heading>
        <Products>
            <div>
            <Img src='./Service.jpg' />   
            <Service>
            <div>                
            <Title>Forgettable</Title>
            <Size>4x4 Inches</Size>
            <Price>$ 21 USD</Price>
            </div>
            <BiCart/>
            </Service>
          
            </div>
            <Img src='./Service.jpg' />
            <Img src='./Service.jpg' />
            <Img src='./Service.jpg' />
            <Img src='./Service.jpg' />
            <Img src='./Service.jpg' />
           


        </Products>
    </Wrapper>
  )
}

export default Whatsnew