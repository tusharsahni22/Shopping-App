import React from 'react'
import styled from 'styled-components'
import SlideShow from './Slide';

const Wrapper = styled.div`
height: 500px;
background-color: aqua;
`;

function Header() {
  return (
    <Wrapper>
<SlideShow/>

    </Wrapper>
  )
}

export default Header