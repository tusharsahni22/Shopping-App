import React, { useEffect } from 'react'
import styled from 'styled-components'
import SideBar from "../SideBar/SideBar"
import { BiCart } from 'react-icons/bi';
import { useNavigate ,useLocation } from 'react-router-dom';
import { viewProduct } from "../Services/product";
const Wrapper = styled.div`
width: 100%;

`;
const Container = styled.div`
display: flex;
`;
const Services = styled.div`
display: flex;
padding: 0 60px;
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
padding: 25px 0 0 0;
`;
const SubHeadings = styled.div`
font-size: 1.25rem;
font-weight: bold;
padding: 0 0 25px 0;
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

function Product() {
  const navigate = useNavigate();
  const [data,setData] = React.useState([])
  const location = useLocation();
  const {MHeading1,SubHeading} = location.state || {}
//   const dummyData = [
//     // {pic:"cool-man-sweatshirt.png",title:"Forgettable",size:"4x4 Inches",price:"21"},
//     // {pic:"whatsnew2.jpg",title:"Unlikely Trio",size:"4x4 Inches",price:"21"},
//     // {pic:"man-hd.png",title:"The Marvels Emblem",size:"4x4 Inches",price:"21"},
//     // {pic:"whatsnew2.jpg",title:"Photon",size:"4x4 Inches",price:"21"},
//     // {pic:"man-tshirt.png",title:"Ms. Marvel",size:"4x4 Inches",price:"21"},
//     // {pic:"whatsnew3.jpg",title:"Caption Marvel",size:"4x4 Inches",price:"21"},
//     // {pic:"whatsnew1.jpg",title:"We're a Team",size:"4x4 Inches",price:"21"}
// ]

useEffect(()=>{
viewProduct().then((res)=>{
  console.log(res.data)
  setData(res.data)
}).catch((err)=>console.log(err))
},[])


  return (
    <Wrapper>
      <Heading>{MHeading1}</Heading>
      <SubHeadings>{SubHeading}</SubHeadings>
      <Container>
      <SideBar data={[{category:"Size",type:["Small","Medium","Large","X Large","XXL"]},{category:"Colours",type:["White","Black","Blue","Warm White","Grey"]},{category:"Category",type:["Tshits","Sweatshirt","Hoddies"]}]}/>
      <Services>
        <ProductItems >
        {data.map((e)=>(
            <Frame key={e._id} onClick={()=>{navigate("/product-description",{state:{
              id:e._id,
              price:e.price,
              size:e.size,
              title:e.title,
              mainPicture:e.mainPicture,
              altPictures:e.altPictures,
              specification:e.specification,
              description:e.description
              }} )}}>
            <Img src={e.mainPicture} />   
            <Service>
            <div>                
            <Title>{e.title}</Title>
            <Size>{e.size}</Size>
            <Price>₹{e.price}</Price>
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

export default Product