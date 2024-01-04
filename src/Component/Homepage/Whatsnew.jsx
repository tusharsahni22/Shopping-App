import React from 'react'
import { BiCart } from 'react-icons/bi';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from "react-icons/md";

const Wrapper = styled.div`
margin-bottom: 100px;
/* padding: 0 50px; */
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
margin-top: 50px;

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
:hover{
  cursor: pointer;
}

`;
const Img =styled.img`
width: 190px;
height: 240px;

`;
const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
  position: relative;
  top: 31px;
  left: 165px;
  color: white;
  &:hover{
    color: red;
  }
`;

function Whatsnew(props) {
    const dummyData = [
        {pic:"whatsnew1.jpg",title:"Forgettable",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew2.jpg",title:"Unlikely Trio",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew3.jpg",title:"The Marvels Emblem",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew4.jpg",title:"Photon",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew5.jpg",title:"Ms. Marvel",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew6.jpg",title:"Caption Marvel",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew7.jpg",title:"We're a Team",size:"4x4 Inches",price:"21"}
    ]
    const navigate = useNavigate();
  return (
    <Wrapper>
        <Heading>{props.title}</Heading>
        <Products >
        {dummyData.map((e)=>(
            <Frame key={e.key} >
              <FavoriteIcon/>
            <Img onClick={()=>{navigate("/products")}} src={e.pic} />   
            <Service>
            <div>                
            <Title>{e.title}</Title>
            <Size>{e.size}</Size>
            <Price>₹ {e.price}</Price>
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