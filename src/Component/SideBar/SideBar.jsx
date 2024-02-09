import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
height: 100vh;
width: 150px;
overflow-y: scroll;
&::-webkit-scrollbar{
  display: none;
}
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
function SideBar({data,setFilter}) {
  // const [checkbox,setCheckbox] = React.useState(false)
  // checked={checkbox[key] || false}
  
  const setFilterValue=(event,key,category)=>{
    // setCheckbox(prevCheckboxes => ({
    //   ...prevCheckboxes,
    //   [key]: !prevCheckboxes[key]
    // }))
    setFilter({ "filterOn": category, type: event.target.getAttribute("data-value") });
  }
  
  return (
    <Wrapper>
      <Heading>Filters</Heading>
      {data.map((e)=>(   
      <Data key={e._id}> 
      <Line/>     
      <Category>{e.category}</Category>
      
      {e.type.map((f)=>(
        <Checkbox key={f._id}>
        <input data-value={f} onClick={(event)=>{setFilterValue(event, f, e.category)}} type='checkbox'/>
      <Type data-value={f} onClick={(event)=>{setFilterValue(event,f,e.category)}} >{f.charAt(0).toUpperCase()+ f.slice(1)}</Type>
      </Checkbox>
      ))}
      
      </Data>
      ))}
    </Wrapper>
  )
}

export default SideBar