import React from 'react'
import styled from 'styled-components';
import {useNavigate} from "react-router-dom"

const MainService =  styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
grid-gap: 0px;
height: 500px;
overflow: hidden;
margin-bottom:100px;
@media (max-width: 767px) {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0px;
  height: 250px;
  overflow: hidden;
  margin-bottom: 50px;
}
@media (min-width: 768px) and (max-width: 1024px) {
  margin-bottom: 0px;
  height: 400px;
}
`;
const Img =  styled.img`
height: 100%;
width: 100%;
&:hover{
transition: transform 0.4s ease;
transform-origin: 50% 50%;
transform: scale(1.1);
cursor: pointer;
}
@media (max-width: 767px) {
  height: 250px;
  width: 100%;
  &:hover{
    transition: transform 0.4s ease;
    transform-origin: 50% 50%;
    transform: scale(1.1);
    cursor: pointer;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 350px;
    width: 100%;
    &:hover{
      transition: transform 0.4s ease;
      transform-origin: 50% 50%;
      transform: scale(1.1);
      cursor: pointer;
      }
    }
   
`;

function Mainservice(props) {
  const navigate = useNavigate()
  const handleProducts = ()=>{
    navigate("/products")
  }
  return (
    <MainService>
      {props.url.map((e)=>(
        <div key={e._id} onClick={()=>{handleProducts()}} >
        <Img loading='lazy' src={e.data} />
        </div>
       
      ))}
        
    </MainService>
  )
}

export default Mainservice