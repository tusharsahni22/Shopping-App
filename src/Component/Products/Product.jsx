import React, { useEffect } from 'react'
import styled from 'styled-components'
import SideBar from "../SideBar/SideBar"
import { BiCart } from 'react-icons/bi';
import { useNavigate ,useLocation } from 'react-router-dom';
import { viewProduct } from "../Services/product";
import {CiFilter} from "react-icons/ci";
import {LiaSortDownSolid} from "react-icons/lia";

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
@media (max-width: 767px) {
  padding: 0 0px;
}
`;
const Title = styled.div`
font-size: 1rem;
font-weight: 500;
padding: 25px 0 5px 0;
@media (max-width: 767px) {
  font-weight: 200;
  padding:10px 0 5px 0;
}
`;
const Heading = styled.div`
font-size: 2.25rem;
font-weight: 400;
padding: 25px 0 0 0;
`;
const SubHeadings = styled.div`
font-size: 1.25rem;
font-weight: 400;
padding: 0 0 25px 0;
`;
const ProductItems = styled.div`
/* margin-top: 50px; */
display: grid;
width: 100%;
height: 100vh;
overflow-y: scroll;
grid-template-columns: repeat(4, minmax(0, 1fr));
&:hover{
  cursor: pointer;
}
@media (max-width: 767px) {
grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 768px) and (max-width: 1200px){
grid-template-columns: repeat(3, minmax(0, 1fr));
}
`;
const Price = styled.div`
color: grey;
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
@media (max-width: 767px) {
  padding: 10px 2px;
}

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

const FilterSort = styled.div`
padding: 0 10px;
display: flex;
justify-content:flex-end;
gap: 20px;
@media (min-width: 767px) {
  display: none;
}
`;

function Product() {
  const navigate = useNavigate();

  const [filter,setFilter] = React.useState("")
  const [filterData,setFilterData] = React.useState([])
  const location = useLocation();
  const {MHeading1,SubHeading} = location.state || {};

  useEffect(()=>{
      window.scrollTo(0, 0);
  },[])

  const filterDataBySelector = (filter,data)=>{
    switch(filter.filterOn){
      case "Size": {
        const dataBySize = data.filter((e) => e.size.includes(filter.type.toLowerCase()));
        setFilterData(dataBySize);
        console.log("first",filter.type.toLowerCase().substring(0,3))
        break;
      }
      case "Colours":{
        const dataByColor = data.map((e) => {
          if (e.color.includes(filter.type)) {
            const colorToIndex = e.colorToIndexMap.reduce((res, cur) => { return { ...cur, ...res } }, {});
              const index = colorToIndex[filter.type];
              let newMainPicture = e.mainPicture;
              if (index === 0) {
                  newMainPicture = e.mainPicture;
              } else if (index >= 2 && e.altPictures.length >= index ) {
                  newMainPicture = e.altPictures[index-1];
              }
              return {
                  ...e,
                  mainPicture: newMainPicture
              };
          }
          return e;
      });
      setFilterData(dataByColor);
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
  filterDataBySelector(filter , res.data.sort(() => Math.random() - 0.5))
}).catch((err)=>console.log(err))
},[filter])



  return (
    <Wrapper>
      
      <FilterSort >
      <Heading>{MHeading1}</Heading>
      <SubHeadings>{SubHeading}</SubHeadings>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <CiFilter />
        <div>Filter</div>
        </div>
        <div style={{display:"flex",alignItems:"center",gap:"10px"}}>[]
        <div>Sort</div>
        <LiaSortDownSolid />
        </div>
      </FilterSort>
      <Container>
      <SideBar data={[{_id:1,category:"Size",type:["small","medium","large","xl","xxl"]},{_id:2,category:"Colours",type:["white","black"]},{_id:3,category:"Category",type:["t-shirt","oversize"]}]} setFilter={setFilter}/>
      <Services>
        <ProductItems >
        {filterData?.map((f)=>(
            <Frame key={f._id} onClick={()=>{navigate(`/product-description/${f._id}`)}}>
            <Img src={f.mainPicture} />   
            <Service>
            <div>                
            <Title>{f.title}</Title>
            <Discounted>
            <Price>₹{f.price}</Price>
            <DiscountedPrice>₹{f.priceAfterDiscount}</DiscountedPrice>
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