import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0px 50px 100px;
@media (max-width: 767px) {
  padding: 0px 0px 35px;
}
`;

const Img =styled.img`
height: 145px;
width: 100%;
&:hover{
  cursor: pointer;
}
@media (max-width: 767px) {
  height: 70px;
}
`;

function Banner(props) {
  return (
    <Wrapper>
        <Img  loading='lazy' src={props.url}/>
    </Wrapper>
  )
}

export default Banner