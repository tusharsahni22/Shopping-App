import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Slider = styled.input.attrs({ type: 'range'})`
  width: 100%;
  height: 2px;
  background: #0000ff; /* Change this to the color you want */
  position: relative;
`;

function App() {
  const [cartPrice, setCartPrice] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    // Update the slider value when the cart price increases
    setCartPrice(20)
    setSliderValue(cartPrice);
  }, [cartPrice]);

  return (
    <div>
      <Slider min="0" max="100" value={sliderValue} />
    </div>
  );
}

export default App;