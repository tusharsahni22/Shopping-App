import React from 'react'
// import { BiCart } from 'react-icons/bi';
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
// import { MdOutlineFavoriteBorder } from "react-icons/md";

const Wrapper = styled.div`
// margin-bottom: 100px;
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
// margin-top: 50px;
text-align: center;
font-size: 20px;

`;
const Service = styled.div`
display: flex;
justify-content: center;

`;
const Title = styled.div`
margin-top: 25px;
font-weight: 800;
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
// const FavoriteIcon = styled(MdOutlineFavoriteBorder)`
//   position: relative;
//   top: 31px;
//   left: 165px;
//   color: white;
//   &:hover{
//     color: red;
//   }
// `;

function Whatsnew(props) {
    const dummyData = [
        {pic:"whatsnew1.webp",title:"Its Time to train",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew2.webp",title:"Human Being",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew3.webp",title:"Wild and Free",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew4.webp",title:"Work hard stay humble",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew5.webp",title:"Skull Island",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew6.webp",title:"I and not old",size:"4x4 Inches",price:"21"},
        {pic:"whatsnew7.webp",title:"Wild Monkey",size:"4x4 Inches",price:"21"}
    ]
    const navigate = useNavigate();
  return (
    <Wrapper>
        <Heading>{props.title}</Heading>
        <Products>
        {dummyData.map((e)=>(
            <Frame key={e._id} >
              {/* <FavoriteIcon/> */}
            <Img loading='lazy' onClick={()=>{navigate("/products")}} src={e.pic} />   
            <Service>
                           
            <Title>{e.title}</Title>
         
             </Service>
            </Frame>
         ))}
        </Products>
    </Wrapper>
  )
}

export default Whatsnew