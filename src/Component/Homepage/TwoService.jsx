import React from 'react'
import styled from 'styled-components'
import {BsArrowRight} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 100px;
padding: 0 50px;
`;
const Service = styled.div`
max-width: 50%;
`;
const Title = styled.div`
font-size: 1.25rem;
font-weight: 700;
margin: 30px 0;

`;
const Desc = styled.div`
max-width: 24rem;
margin-top: 0.75rem;
`;
const BuyButton = styled.div`
font-size: 15px;
margin: 25px 0 0 15px;
font-weight: bold;
letter-spacing: 1.25px;
&:hover{
    text-decoration: underline;
}
`;
const Img = styled.img`
height: 410px;
padding-right: 5px;
width: 100%;
&:hover{
  cursor: pointer;
}
`;
const Img2 = styled.img`
height: 410px;
padding-left: 5px;
width: 100%;

&:hover{
  cursor: pointer;
}
`;
function TwoService(props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
        <Service onClick={()=>{navigate("/products")}}>
        <Img loading='lazy' src={props.url1}/>
        <Title>Save *Big* on Halloween Ink</Title>
        <Desc>We had free space on our site and Spirit Halloween immediately took over?</Desc>
        <div style={{display:"flex"}}>
        <BuyButton>{props.buy1} </BuyButton>
        <BsArrowRight style={{margin: "25px 0 0 15px"}}/>
        </div>
        </Service>
        <Service onClick={()=>{navigate("/products")}}>
        <Img2 loading='lazy' src={props.url2}/>
        <Title>Save *Big* on Halloween Ink</Title>
        <Desc>We had free space on our site and Spirit Halloween immediately took over?</Desc>
        <div style={{display:"flex"}}>
        <BuyButton>{props.buy2} </BuyButton>
        <BsArrowRight style={{margin: "25px 0 0 15px"}} />
        </div>
        </Service>
        
    </Wrapper>
  )
}

export default TwoService