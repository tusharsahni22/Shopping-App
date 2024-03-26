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
  // const [inputValue, setInputValue] = useState('');

  const handleAddClick = () => {
    setInputs(inputs.concat({ id: `input-${inputs.length}`, value: '' }));
  };

  const handleInputChange = (id, newValue) => {
    setInputs(inputs.map(input => input.id === id ? { ...input, value: newValue } : input));
  };

  const handleInputBlur = () => {
    props.setSpecification(inputs.map(input => input.value));
  };


  return (
    <Wrapper>
      {inputs.map((input, index) => (
        <InputField
          key={input.id}
          type="text"
          placeholder={`Input #${index + 1}`}
          value={input.value}
          onChange={(e) => handleInputChange(input.id, e.target.value)}
          onBlur={handleInputBlur}
        />
      ))}
      <Button onClick={handleAddClick}>Add</Button>
    </Wrapper>
  );
}

export default DynamicInput;