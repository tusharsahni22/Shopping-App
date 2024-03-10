import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0px 50px;
margin-bottom: 100px;
@media (max-width: 767px) {
  padding: 0px 0px;
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

`;
function Poster(props) {
  return (
    <Wrapper>
        <Img  loading='lazy' src={props.url}/>
    </Wrapper>
  )
}

export default Poster