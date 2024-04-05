import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { getFavorite, removeFavorite } from '../Services/profile';
import { ToastContainer, toast } from 'react-toastify';


const Wrapper = styled.div`
// padding: 0 10%;
width: 100%;
`;
const Container = styled.div`
display: flex;
padding: 40px 10px;
height: max-content;
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
/* height: 100vh; */
overflow-y: scroll;
grid-template-columns: repeat(3, minmax(0, 1fr));
&:hover{
  cursor: pointer;
}
@media (max-width:767px){
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
`;
const Price = styled.div`
text-align: center;
font-weight: 700;
font-size: 12px;
`;
const Size = styled.div`
text-align: center;
font-size: 12px;

`;
const Frame = styled.div`
    box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
    border-radius: 10px;
    height: max-content;
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
`;
const Favorite = styled.div`
font-size: 12px;
margin-top: 5px;
cursor: pointer;
display: inline-block;
min-height: 14px;
vertical-align: baseline;
border: 1px solid black;
padding: 10px;
text-transform: none;
text-shadow: none;
font-weight: 700;
font-size: 12px;
line-height: 14px;
font-style: normal;
text-align: center;
text-decoration: none;
`;

function Favorites({name,greeting}) {
  const navigate = useNavigate();
  const [favData, setFavData] = React.useState([{}]);
  const [trigger, setTrigger] = React.useState(false)
  

  const handleRemoveFavrite = (event,_id)=>{
    event.stopPropagation()
   
    removeFavorite({"productId":_id}).then((res)=>{
      console.log("first",res)
      if(res.status === 200){
        toast.success("Removed from favorite")
    }}).catch(()=>{
      toast.error("Failed to remove from favorite")
    })
    setTrigger(!trigger)
  }

  useEffect(()=>{
    getFavorite().then((res)=>{
      setFavData(res.data)
      console.log("first",res.data)
    })
  },[trigger])

  return (
    <Wrapper>
      <ToastContainer />
      <Welcome> {greeting}! {name?.split(" ")[0]}</Welcome>
      <Container>
      {favData.length === 0 && <div style={{display:"flex",justifyContent:"center",width:"100%"}}>No favorite items</div>}
      {favData.length>0 ?<Services>
        
         <ProductItems onClick={()=>{navigate("/product-description")}}>
           {favData.map((e)=>(
              <Frame key={e._id}>
                <Title>{e.product?.title}</Title>
                <Img loading='lazy' src={e.product?.mainPicture} />   
                <Price>₹ {e.product?.price}</Price>
                <Service>            
                  <Size>Size:  {e.product?.size.map((e)=>(e))}</Size>
                  <BiCart>Add to cart</BiCart>
                  <Favorite onClick={(event)=>{handleRemoveFavrite(event,e.product?._id)}}>Remove</Favorite>
                </Service>
              </Frame>
            ))}
        </ProductItems>
       
      </Services>:""}

      </Container>
    </Wrapper>
  )
}

export default Favorites