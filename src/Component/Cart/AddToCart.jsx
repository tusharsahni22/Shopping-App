import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
// import SliderComponent from './Slider';
import { useSelector,useDispatch  } from 'react-redux';
import { removeFromCart,updateQuantity } from '../reducers/cart';
import { useNavigate } from 'react-router-dom';

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 448px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  /* transform: translateX(100%); */
  backdrop-filter: blur(5px);
  @media (max-width:767px){
    width:100%;
  }
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 100;
`;
const Head = styled.div`
display : flex;
height: 50px;
background-color: #212121;
justify-content: space-between;
color: white;
align-items: center;
padding: 0 15px;
`;
const LeftArrow = styled(BsArrowLeft)`
cursor: pointer;
`;
const Text = styled.div`

`;
const Count = styled.div`


`;
const Bundle = styled.div`
text-align: center;
color: #212121;
margin-top: 25px;
font-weight: bold;
`;
const AddMore = styled.div`
text-align: center;
color: #212121;
margin-top: 12px;
`;
const NoItem = styled.div`
text-align: center;
color: #212121;
padding:50% 0 0 0;
 `;
const AllCartItems = styled.div`
height: 50vh;
overflow-y: scroll;
overflow-x: hidden;
@media(max-width:767px){
  height:35vh;
}
`;

const Total = styled.div`
padding:0 25px;


`;
const SubTotal = styled.div`
display:flex;
justify-content: space-between;
margin-top:25px;
`;
const Price = styled.div`
`;
const PriceTotal = styled.div`
font-weight: bold;
display:flex;
justify-content: flex-end;
margin-top: 10px;
`;

const BuyButton = styled.div`
height:45px;
width: 100%;
background-color: #212121;
color:white;
border-radius:5px;
margin: 20px 0;
display:flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;
const CartItems = styled.div`
display:flex;
padding: 0 25px;
margin-top: 20px;
`;
const Image = styled.img`
height: 100px;
width: 100px;
background-color: #D2D6DC;
border-radius: 5px;
`;
const Details = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
margin-left: 15px;
`;
const Name = styled.div`
margin-top: 10px;
font-weight: bold;
`;

const TotalPrice = styled.div`
margin-left: auto;
`;
const Size = styled.div`
`;
const Color = styled.div`
margin: 0 0 10px 0;

`;
const Remove = styled.div`
color: #212121;
margin-top: 60px;
cursor: pointer;
`;


const Minus = styled.div`
height: 25px;
width: 25px;
border: 1px solid #D2D6DC;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
cursor: pointer;
&:hover{
    background-color: #D2D6DC;
  }
`;
const Plus = styled.div`
height: 25px;
width: 25px;
border: 1px solid #D2D6DC;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
cursor: pointer;
  &:hover{
    background-color: #D2D6DC;
  }
`;
const Countq = styled.div`
height: 25px;
width: 25px;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
`;
const Quantity = styled.div`
display: flex;
align-items: center;

`;



function App({toggleAddtocart}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const product = useSelector((state) => state.cart)
  const total = useSelector((state) => state.total)
  const totalItems = 0 || parseInt(useSelector((state) => state.totalItems))
  const handleproduct = ()=>{
    toggleAddtocart()
    navigate("/checkout")
  }
  const handleRemoveFromCart = (id,size,color)=>{
    console.log("first",id,size,color)
    const data ={id,size,color}
    dispatch(removeFromCart(data))

  }
  const handleQuantityMinus = (id,size,color)=>{
    const data ={"quantity":-1,id,size,color}    
      dispatch(updateQuantity(data))
  }
  const handleQuantityPlus = (id,size,color)=>{
    const data ={"quantity":1,id,size,color}    
    dispatch(updateQuantity(data))
  }

  return (
    <> 
      <Overlay onClick={()=>{toggleAddtocart()}} />
      <Sidebar >
        <Head><LeftArrow onClick={()=>{toggleAddtocart()}}/>
        <Text>Keep Shoping </Text>
        <Count>{totalItems} Item(s)</Count>
        </Head>
        <Bundle>Bundle And Save!</Bundle>
        <AddMore>Add More Save More</AddMore>
        {/* <SliderComponent /> */}
        <AllCartItems>
        {product.map((e)=>(
        totalItems===0?<NoItem key={e.id} >No Item in Cart</NoItem>:
        <CartItems key={e.id}>
          <Image src={e.pic} />
          <Details>
            <Name>{e.title}</Name>
            <Price>₹{e.price}</Price>
            <Size>Size : {e.size.toUpperCase()}</Size>
            <Color>Colour : {e.color.toUpperCase()}</Color>
            <Quantity>
              <Minus onClick={()=>{handleQuantityMinus(e.id,e.size,e.color)}}>-</Minus>
              <Countq>{e.quantity}</Countq>
              <Plus onClick={()=>{handleQuantityPlus(e.id,e.size,e.color)}}>+</Plus>
            </Quantity>
          </Details>
          <TotalPrice>
            <PriceTotal>₹{e.total}</PriceTotal>
            <Remove onClick={()=>{handleRemoveFromCart(e.id,e.size,e.color)}}>Remove</Remove>
          </TotalPrice>
        </CartItems>
        ))}
        </AllCartItems>
        <Total>
          <SubTotal>
            <div>Subtotal</div>
            <Price>₹{total}</Price>
          </SubTotal>
          <SubTotal>
            <div>Savings</div>
            <Price>{"--"}</Price>
          </SubTotal>
          <SubTotal>
            <div style={{fontWeight:"bold"}}>Total</div>
            <Price>₹{total}</Price>
          </SubTotal>
        <BuyButton onClick={()=>handleproduct()}>Buy Now</BuyButton>
        </Total>
      </Sidebar>
    </>
  );
}

export default App;