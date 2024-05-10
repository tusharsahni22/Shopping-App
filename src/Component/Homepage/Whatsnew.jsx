import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { viewLimitedProduct } from '../Services/product';

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
// font:18px antique-olive;
margin-bottom: 40px;
font-weight: 500;
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
font-weight: 500;
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
  
  const [product,setProduct] = React.useState([]);
  useEffect(() => {
    viewLimitedProduct().then((response) => {
      setProduct(response.data);
    })},[])

    const navigate = useNavigate();

  return (
    <Wrapper>
        <Heading>{props.title}</Heading>
        <Products>
        {product.map((e)=>(
            <Frame key={e._id} >
              {/* <FavoriteIcon/> */}
            <Img  onClick={()=>{navigate(`/product-description/${e._id}`)}} src={e.mainPicture} />   
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