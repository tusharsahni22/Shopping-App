import React, { useState } from 'react';

function DynamicInput() {
  const [inputs, setInputs] = useState(['input-0']);

  const handleAddClick = () => {
    setInputs(inputs.concat(`input-${inputs.length}`));
  };

  return (
    <div>
      {inputs.map((input, index) => (
        <input key={input} type="text" placeholder={`Input #${index + 1}`} />
      ))}
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default DynamicInput;