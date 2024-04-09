import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0px 50px;
margin-bottom: 100px;
@media (max-width: 767px) {
  padding: 0px 0px;
  margin-bottom: 50px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  margin-bottom: 50px;
} 
`;
const Img = styled.img`
height: 500px;
width: 100%;
&:hover{
  cursor: pointer;
}
@media (max-width: 767px) {
  height: 250px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  height: 350px;
}

`;
function Poster(props) {
  const navigator = useNavigate()
  return (
    <Wrapper>
        <Img  loading='lazy' src={props.url} onClick={()=>{navigator("/products")}}/>
    </Wrapper>
  )
}

export default Poster