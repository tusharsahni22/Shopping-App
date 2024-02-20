import React, { useState } from 'react';
import styled from 'styled-components';

const InputField = styled.input`    
width: 100%;
height: 40px;
border: 1px solid #000000;
border-radius: 5px;
padding: 0 10px;
margin: 10px 0 0 0;
// remove arrows from number input
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
const Button = styled.div`    
width: 100%;
height: 40px;
border: 1px solid #000000;
border-radius: 5px;
lign-items: center;
display: flex;
justify-content: center;
padding: 0 10px;
background: black;
color: white;
margin: 10px 0 0 0;
// remove arrows from number input
&::-webkit-outer-spin-button,
&::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;
const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

function DynamicInput(props) {
  const [inputs, setInputs] = useState(['input-0']);
  const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    setInputs(inputs.concat(`input-${inputs.length}`));
  };
  // const handleSubmit = () => {
  //   props.setSpecification([...props.specification,inputValue])
  // }



  return (
    <Wrapper>
      {inputs.map((input, index) => (
        <InputField key={input} type="text" placeholder={`Input #${index + 1}`} onChange={(e)=>{setInputValue(e.target.value)}} onBlur={()=>{props.setSpecification([...props.specification,inputValue])}} />
      ))}
      <Button onClick={handleAddClick}>Add</Button>
    </Wrapper>
  );
}

export default DynamicInput;