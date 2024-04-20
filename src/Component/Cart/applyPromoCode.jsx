import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    width: 200px;
`;
const Button = styled.button`
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
    color: #333;
    &:hover{
        background-color: #e0e0e0;
    }
`;
const PromoCodeInputDiv = styled.div`
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    padding: 0 5%;
`;



const PromoCodeInput = ({ onSubmit }) => {
  const [promoCode, setPromoCode] = useState("");

  const handleChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(promoCode);
  };

  return (
    <PromoCodeInputDiv>
      <Input
        type="text"
        placeholder="Enter promo code"
        value={promoCode}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>Apply</Button>
    </PromoCodeInputDiv>
  );
};

export default PromoCodeInput;