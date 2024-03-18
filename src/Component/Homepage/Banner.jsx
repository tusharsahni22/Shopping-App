import React from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0px 50px 100px;
@media (max-width: 767px) {
  padding: 0px 0px 35px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  padding: 0px 0px 50px;
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
@media (min-width: 768px) and (max-width: 1024px) {
  height: 110px
}
`;

function Banner(props) {
  const navigator = useLocation();
  return (
    <Wrapper>
        <Img  loading='lazy' src={props.url} onClick={()=>{navigator("/products")}}/>
    </Wrapper>
  )
}

export default Banner