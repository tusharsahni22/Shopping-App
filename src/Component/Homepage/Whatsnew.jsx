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
&::-webkit-scrollbar{
    display: none;
  }
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
margin-top: 25px;
font-weight: 800;


`;
const Price = styled.div`

`;
const Size = styled.div`

`;
const Frame = styled.div`
padding: 10px;

`;
const Img =styled.img`
width: 190px;
height: 240px;
`;

function Whatsnew() {
    const dummyData = [
        {pic:"whatsnew1.jpg",title:"Forgettable",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew2.jpg",title:"Unlikely Trio",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew3.jpg",title:"The Marvels Emblem",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew2.jpg",title:"Photon",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew1.jpg",title:"Ms. Marvel",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew3.jpg",title:"Caption Marvel",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew1.jpg",title:"We're a Team",size:"4x4 Inches",price:"21"}
    ]
  return (
    <Wrapper>
        <Heading>New In</Heading>
        <Products >
        {dummyData.map((e)=>(
            <Frame key={e.key}>
            <Img src={e.pic} />   
            <Service>
            <div>                
            <Title>{e.title}</Title>
            <Size>{e.size}</Size>
            <Price>$ {e.price} USD</Price>
            </div>
            <BiCart style={{marginTop:"35px",height:"25px",width:"25px"}}/>
            </Service>
            </Frame>
         ))}
        </Products>
    </Wrapper>
  )
}

export default Whatsnew