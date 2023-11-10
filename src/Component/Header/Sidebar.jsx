import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsArrowRightShort,BsArrowLeftShort } from 'react-icons/bs';

const Sidebarr = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 320px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  /* transform: translateX(100%); */
  backdrop-filter: blur(5px);
`;
const SubTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 320px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  /* transform: translateX(100%); */
  backdrop-filter: blur(5px);
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
  z-index: 1;
`;
const Head = styled.div`
display : flex;
height: 50px;
background-color: #212121;
justify-content: space-between;
align-items: center;
padding: 0 10px;

`;


const Option = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 40px;
`;
const Title = styled.div`
`;
const ArrowRight = styled(BsArrowRightShort)`
height: 20px;
width: 20px;
`;
const LeftArrow = styled(BsArrowLeftShort)`
height: 20px;
width: 20px;
color: #fff;

`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e5e5e5;
`;
function Sidebar({toggleSidebar}) {
  const navigate  = useNavigate();
  const [subTitle, setSubTitle] = React.useState("Back");
  const handleSubTitle = (data) => {
    setSubTitle(data);
    console.log("data",subTitle);
  };
  return (
    <> 
      <Overlay onClick={()=>{toggleSidebar()}}/>
      {subTitle==="Back"?
      <Sidebarr>
      <Head/>
      <Line/>
      <Option>
          <Title onClick={()=>{handleSubTitle("Account")}}>Account</Title>
          <ArrowRight/>
        </Option>
    
        <Line/>
        <Option>
          <Title onClick={()=>{handleSubTitle("new")}}>New</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Tattoos</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Nail</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Custom</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Tattoo MakeOver</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Sale</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Category</Title>
          <ArrowRight/>
        </Option>
        <Line/>
        <Option>
          <Title>Help</Title>
          <ArrowRight/>
        </Option>
        
        
      </Sidebarr>:""}
      {subTitle==="Account"?<SubTitle>
      <Head onClick={()=>{handleSubTitle("Back")}}>
        <LeftArrow/>
        </Head>
      <Line/>
      <Option>
        <Title onClick={()=>{navigate("/myprofile",{state:{YourProfileTab:"Your Profile"}})}}>Your Profile</Title>
      </Option>
      <Line/>
      <Option>
        <Title onClick={()=>{navigate("/myprofile",{state:{OrderHistoryTab:"Order History"}})}}>Order History</Title>
      </Option>
      </SubTitle>:""}

    </>
  );
}

export default Sidebar;