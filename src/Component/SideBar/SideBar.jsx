import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 100vh;
overflow-y:scroll ;
width: 150px;
`;
const Heading = styled.div`
font-size: 15px;
font-weight: bold;
`;
const Category = styled.div`
font-size: 15px;
font-weight: bold;
margin: 30px 0  ;
`;
const Type = styled.div`
font-size: 15px;
display: flex;
flex-direction: column;
padding: 0 5px;
`;
const Data = styled.div`
/* display: flex; */
`;
const Checkbox = styled.div`
display: flex;
margin: 0 0 10px 0;
`;
const Line = styled.div`
background-color: #D4D4D4;
height: 1px;
margin-top: 30px;
width: 100%;
`;
function SideBar({data}) {
  
  return (
    <Wrapper>
      <Heading>Filters</Heading>
      {data.map((e,key)=>(   
      <Data key={e.key}> 
      <Line/>     
      <Category >{e.category}</Category>
      
      {e.type.map((f,key)=>(
        <Checkbox key={key}>
        <input type='checkbox'/>
      <Type >{f}</Type>
        </Checkbox>
      ))}
      
      </Data>
      ))}
    </Wrapper>
  )
}

export default SideBar