import React, { useState } from "react";
import styled from "styled-components";
import { applyPromoCode } from "../Services/profile";

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
    /* padding: 0 5%; */
`;



const PromoCodeInput = (props) => {
  const [promoCode, setPromoCode] = useState("");
//   const [discount, setDiscount] = useState(0);

  const handleChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyPromoCode({"code":promoCode.toLowerCase()}).then((res) => {
      if (res.status === 200) {
       if(res.data.flatDiscount===null){
        props.setDiscount({"percentageDiscount":res.data.percentDiscout});
       }else{
        props.setDiscount({"flatDiscount":res.data.flatDiscount});
       }

      } else {
        alert("Invalid Promo Code");
      }
    });
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