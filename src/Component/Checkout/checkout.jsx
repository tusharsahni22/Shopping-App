import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
padding: 0 5%;
justify-content: space-between;
width: 100%;
`; 
const Left = styled.div`
  background-color: white;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.1);
`;
const Right = styled.div``;
const Head = styled.div``;

const CheckoutTagLine  = styled.div`
height : 100px;
position: relative;
border: 1px solid black;
margin-top: 20px;
&::before {
    content: 'EXPRESS CHECKOUT';
    position: absolute;
    top: -10px;
    left: 45%;
    background: white;
  }
`;
const AddressForm = styled.div`
display: flex;
flex-direction: column;
`;
const InputContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
`;
const TwoField = styled.div`
display: flex;
justify-content: space-between;
/* width: 100%; */
gap: 10px;
`;
const Input = styled.input`
margin: 5px 0;
height: 25px;
padding: 15px 0 0 10px;
width: 100%;
outline: 1px solid black;

&:placeholder-shown + label,
  &:empty + label {
    font-size: 12px;
    cursor: text;
    top: 5px;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    font-size: 12px;
    cursor: pointer;
    top: 0;
  }
`;
const PlaceholderLabel = styled.label`
  position: absolute;
  padding: 10px 10px;
  top: 0px;
  display: block;
  transition: 0.2s;
  font-size: 12px;
  color: #999;
`;
const Products = styled.div`
height: 250px;
background-color: blue;
`;
const Reward = styled.div`
`;
const Line = styled.div`
height: 1px;
background-color: gray;
margin-top: 10px;
margin-bottom: 10px;
width: 100%;
`;
const Total = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
margin-bottom: 10px;
`;
const TotalText = styled.div`
font-weight: bold;
font-size: 20px;
color: gray;
margin-bottom: 10px;
margin-top: 10px;
width: 100%;
text-align: right;
`;
const TotalPrice = styled.div`
font-weight: bold;
font-size: 20px;
color: gray;
margin-bottom: 10px;
margin-top: 10px;
width: 100%;
text-align: right;
`;

const Shipping = styled.div`
font-weight: bold;
font-size: 20px;
color: gray;
margin-bottom: 10px;
margin-top: 10px;
width: 100%;
text-align: right;
`;
const ShippingPrice = styled.div`
font-weight: bold;
font-size: 20px;
color: gray;
margin-bottom: 10px;
`;


function Checkout() { 
  return (
    <Wrapper>
      <Left>
      <Head>Information  {'>'}  Shipping  {'>'}Payment</Head>
      <CheckoutTagLine>
        hhhhh
      </CheckoutTagLine>
      <AddressForm>
      <h7>Shipping Address</h7>
      <TwoField>
        <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >First Name</PlaceholderLabel>
    </InputContainer>
    <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >Last Name</PlaceholderLabel>
    </InputContainer>
      </TwoField>
      <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >Address</PlaceholderLabel>
    </InputContainer>
    <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >Appartments,Suits etc</PlaceholderLabel>
    </InputContainer>

      <TwoField>
      <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >State</PlaceholderLabel>
      </InputContainer>
      <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >City</PlaceholderLabel>
      </InputContainer>
      </TwoField>
      <InputContainer>
      <Input type="text" required placeholder=" "  />
      <PlaceholderLabel >Phone Number</PlaceholderLabel>
    </InputContainer>
      </AddressForm>
    <div>Checkout</div>
    </Left>
    <Right>
    <Products>
    </Products>
    <Reward></Reward>
    <Line></Line>
    <Total>
      <TotalText>Total</TotalText>
      <TotalPrice>$ 100</TotalPrice>
      <Shipping>Shipping</Shipping>
      <ShippingPrice>$ 100</ShippingPrice>
      </Total>
      <Line></Line>
      <Total/>
    </Right>
    </Wrapper>
  )
}

export default Checkout