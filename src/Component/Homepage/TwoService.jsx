import React from 'react'
import styled from 'styled-components'
import {BsArrowRight} from "react-icons/bs"
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 100px;
padding: 0 50px;
@media (max-width: 767px) {
  padding: 0px 0px;
  margin-bottom: 50px;
}
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
margin: 25px 0 0 0px;
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
@media (max-width: 767px) {
  height: 250px;
}
`;
const Img2 = styled.img`
height: 410px;
padding-left: 5px;
width: 100%;

&:hover{
  cursor: pointer;
}
@media (max-width: 767px) {
  height: 250px;
}
`;
function TwoService(props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
        <Service onClick={()=>{navigate("/products")}}>
        <Img loading='lazy' src={props.url1}/>
        <Title>Save *Big* on Holi Week </Title>
        <Desc>Let the colors of Holi create a masterpiece of memories.</Desc>
        <div style={{display:"flex"}}>
        <BuyButton>{props.buy1} </BuyButton>
        <BsArrowRight style={{margin: "25px 0 0 15px"}}/>
        </div>
        </Service>
        <Service onClick={()=>{navigate("/products")}}>
        <Img2 loading='lazy' src={props.url2}/>
        <Title>Save Big on Holi Week</Title>
        <Desc>Get ready to get painted red, blue, green, and yellow!</Desc>
        <div style={{display:"flex"}}>
        <BuyButton>{props.buy2} </BuyButton>
        <BsArrowRight style={{margin: "25px 0 0 15px"}} />
        </div>
        </Service>
        
    </Wrapper>
  )
}

export default TwoService