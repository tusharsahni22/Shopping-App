import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import SliderComponent from './Slider';
const Sidebar = styled.div`
  position: absolute;
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
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 1;
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

// `;
const Total = styled.div`
padding:0 15px;


`;
const SubTotal = styled.div`
display:flex;
justify-content: space-between;
margin-top:25px

`;
const Price = styled.div`

`;
const BuyButton = styled.div`
height:45px;
width: 100%;
background-color: #212121;
text-align:center;
color:white;
border-radius:5px;
margin: 20px 0;

`;

function App({toggleAddtocart}) {
  

  return (
    <> 
      <Overlay />
      <Sidebar >
        <Head><LeftArrow onClick={()=>{toggleAddtocart()}}/>
        <Text>Keep Shoping </Text>
        <Count>{0} Item(s)</Count>
        </Head>
        <Bundle>Bundle And Save!</Bundle>
        <AddMore>Add More Save More</AddMore>
        <SliderComponent />
        <NoItem>You have no items in your cart</NoItem>

        <Total>
          <SubTotal>
            <div>Subtotal</div>
            <Price>$20</Price>
          </SubTotal>
          <SubTotal>
            <div>Savings</div>
            <Price>{"--"}</Price>
          </SubTotal>
          <SubTotal>
            <div style={{fontWeight:"bold"}}>Total</div>
            <Price>$20</Price>
          </SubTotal>
            <BuyButton>Buy Now</BuyButton>



        </Total>
      </Sidebar>
    </>
  );
}

export default App;