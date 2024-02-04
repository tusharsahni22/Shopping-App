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
padding: 25px 0 5px 0;
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
text-decoration: line-through;
`;
const DiscountedPrice = styled.div`
color: #ff0000;
`;
const Discounted = styled.div`
display: flex;
gap: 15px;
`;

// const Size = styled.div`

// `;
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

  const [filter,setFilter] = React.useState("")
  const [filterData,setFilterData] = React.useState([])
  const location = useLocation();
  const {MHeading1,SubHeading} = location.state || {}

  const filterDataBySelector = (filter,data)=>{
    console.log("firsttttt",filter)
  
    switch(filter.filterOn){
      case "Size": {
        const dataBySize = data.filter((e) => e.size.includes(filter.type.toLowerCase()));
        setFilterData(dataBySize);
        console.log("first",filter.type.toLowerCase().substring(0,3))
        break;
      }
      case "Colours":{
        const dataByColor = data.filter((e)=>e.color.includes(filter.type))
        setFilterData(dataByColor)
        break;
      }
      case "Category":{
      const dataByCategory = data.filter((e)=>e.category===filter.type)
      setFilterData(dataByCategory)
      break;
      }
      default:{
      const allData = data
      setFilterData(allData)
      }
    }


  }

useEffect(()=>{
viewProduct().then((res)=>{
  filterDataBySelector(filter , res.data)
}).catch((err)=>console.log(err))
},[filter])


const discoutPrice = (pricetoConvert)=>{
  const discountedPrice=pricetoConvert - 0.1675 * pricetoConvert;
  return Math.round(discountedPrice);
}


  return (
    <Wrapper>
      <Heading>{MHeading1}</Heading>
      <SubHeadings>{SubHeading}</SubHeadings>
      <Container>
      <SideBar data={[{category:"Size",type:["small","medium","large","xl","xxl"]},{category:"Colours",type:["white","black"]},{category:"Category",type:["t-shirt","sweatshirt","hoodie"]}]} setFilter={setFilter}/>
      <Services>
        <ProductItems >
        {filterData.map((e)=>(
            <Frame key={e._id} onClick={()=>{navigate("/product-description",{state:{
              id:e._id,
              price:e.price,
              size:e.size,
              title:e.title,
              mainPicture:e.mainPicture,
              altPictures:e.altPictures,
              specification:e.specification,
              description:e.description,
              colorToIndexMap:e.colorToIndexMap.reduce((res,cur)=>{return {...cur,...res}},{})
              }})}}>
            <Img src={e.mainPicture} />   
            <Service>
            <div>                
            <Title>{e.title}</Title>
            <Discounted>
            <Price>₹{e.price}</Price>
            <DiscountedPrice>₹{discoutPrice(e.price)}</DiscountedPrice>
            </Discounted>
            </div>
            <BiCart className='Bicart' style={{marginTop:"20px",height:"25px",width:"25px",padding:"10px",borderRadius:"20px",':hover': {backgroundColor:"#80808057",cursor:"pointer"}}}/>
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