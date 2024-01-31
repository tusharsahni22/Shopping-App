import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';


const Wrapper = styled.div`
// padding: 0 10%;
width: 100%;
`;
const Container = styled.div`
display: flex;
padding: 40px 10px;
margin: 60px 0;
border-radius: 15px;
box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
`;
const Services = styled.div`
display: flex;
::-webkit-scrollbar {
    display: none;
}
width: 100%;
`;
const Title = styled.div`
font-size: 12px;
padding: 2px 0;
text-align: center;
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
text-align: center;
font-weight: 700;
font-size: 12px;
`;
const Size = styled.div`

`;
const Frame = styled.div`
    box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
    border-radius: 10px;
    padding: 10px;
    margin: 0 15px 15px 15px;
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
flex-direction: column;
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
const BiCart = styled.div`
font-size: 12px;

cursor: pointer;
display: inline-block;
min-height: 14px;
outline: 0;
border: none;
vertical-align: baseline;
background: black;
color: white;
margin: 0;
padding: 10px;
text-transform: none;
text-shadow: none;
font-weight: 700;
font-size: 12px;
line-height: 14px;
font-style: normal;
text-align: center;
text-decoration: none;
`


function Favorites({name}) {
  const navigate = useNavigate();
  const dummyData = [
    {pic:"whatsnew1.jpg",title:"Forgettable",size:"s",price:"21"},
    {pic:"whatsnew2.jpg",title:"Unlikely Trio",size:"m",price:"21"},
    {pic:"whatsnew3.jpg",title:"The Marvels Emblem",size:"l",price:"21"},
    {pic:"whatsnew2.jpg",title:"Photon",size:"xl",price:"21"},
    {pic:"whatsnew1.jpg",title:"Ms. Marvel",size:"m",price:"21"},
    {pic:"whatsnew3.jpg",title:"Caption Marvel",size:"s",price:"21"},
    {pic:"whatsnew1.jpg",title:"We're a Team",size:"xl",price:"21"}
]

  return (
    <Wrapper>
      <Welcome> Good Evening {name.split(" ")[0]}!</Welcome>
      <Container>
      <Services>
        <ProductItems onClick={()=>{navigate("/product-description")}}>
        {dummyData.map((e)=>(
            <Frame key={e.key}>
            <Title>{e.title}</Title>
            <Img src={e.pic} />   
            <Price>Rs. {e.price}</Price>
            <Service>
            <div>                
            
            <Size>Size:{e.size}</Size>
            
            </div>
            <BiCart>Add to cart</BiCart>
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