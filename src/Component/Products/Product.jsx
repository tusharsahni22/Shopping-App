import React from 'react'
import styled from 'styled-components'
import SideBar from "../SideBar/SideBar"
import { BiCart } from 'react-icons/bi';

const Wrapper = styled.div`
padding: 0px 5% 100px;
width: 100%;

`;
const Container = styled.div`
display: flex;
`;
const Services = styled.div`
display: flex;
`;
const Title = styled.div`
font-size: 1rem;
font-weight: bold;
padding: 25px 0;
`;
const Heading = styled.div`
font-size: 2.25rem;
font-weight: bold;
padding: 25px 0;
`;
const ProductItems = styled.div`
margin-top: 50px;
display: grid;
width: 100%;
height: 100vh;
overflow-y: scroll;
grid-template-columns: repeat(3, minmax(0, 1fr));

`;
const Price = styled.div`

`;
const Size = styled.div`

`;
const Frame = styled.div`
padding: 10px;

`;
const Img =styled.img`
width: 340px;
height: 420px;
`;
const Service = styled.div`
display: flex;
justify-content: space-between;
width: 340px;

`;

function Product() {
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
      <Heading>All Products</Heading>
      <Container>
      <SideBar data={[{category:"Body Part",type:["Forearm","Biceps","Shoulder","Ribs","Calf"]},{category:"Style",type:["Linework","Illustrative","Blackwork","Minimalist","Text"]}]}/>
      <Services>
        <ProductItems>
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
        </ProductItems>
      </Services>

      </Container>
      
    </Wrapper>
  )
}

export default Product