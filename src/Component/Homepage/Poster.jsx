import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 0px 50px;
margin-bottom: 100px;
`;
const Img = styled.img`
height: 500px;
width: 100%;
&:hover{
  cursor: pointer;
}

`;
function Poster(props) {
  return (
    <Wrapper>
        <Img src={props.url}/>
    </Wrapper>
  )
}

export default Poster