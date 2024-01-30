import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { BiCart } from 'react-icons/bi';


const Wrapper = styled.div`
padding: 0 10%;
`;
const Container = styled.div`
display: flex;
margin-bottom: 30px;
`;
const Services = styled.div`
display: flex;
::-webkit-scrollbar {
    display: none;
}
width: 100%;
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
/* margin-top: 50px; */
display: grid;
width: 100%;
height: 100vh;
overflow-y: scroll;
grid-template-columns: repeat(3, minmax(0, 1fr));
&:hover{
  cursor: pointer;
}
`;
const Price = styled.div`
font-weight: bold;
`;
const Size = styled.div`

`;
const Frame = styled.div`
padding: 10px;

`;
const Img =styled.img`
/* width: 340px;
height: 420px; */
width: 100%;
max-width: 340px;
height: auto;
max-height: 340px;
`;
const Service = styled.div`
display: flex;
justify-content: space-between;
max-width: 340px;

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


function Favorites({name}) {
  const navigate = useNavigate();
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
      <Welcome> Good Evening {name.split(" ")[0]}!</Welcome>
       <Heading>Favorites</Heading>
      <Container>
      <Services>
        <ProductItems onClick={()=>{navigate("/product-description")}}>
        {dummyData.map((e)=>(
            <Frame key={e.key}>
            <Img src={e.pic} />   
            <Service>
            <div>                
            <Title>{e.title}</Title>
            <Size>{e.size}</Size>
            <Price>${e.price} USD</Price>
            </div>
            <BiCart className='Bicart' style={{marginTop:"35px",height:"25px",width:"25px",padding:"10px",borderRadius:"20px",':hover': {backgroundColor:"#80808057",cursor:"pointer"}}}/>
            </Service>
            </Frame>
         ))}
        </ProductItems>
       
      </Services>

      </Container>
    </Wrapper>
  )
}

export default Favorites