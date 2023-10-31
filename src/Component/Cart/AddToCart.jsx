import React from 'react';
import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import SliderComponent from './Slider';
const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 448px;
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
color: white;
align-items: center;
padding: 0 15px;
`;
const LeftArrow = styled(BsArrowLeft)`

`;
const Text = styled.div`

`;
const Count = styled.div`

`;
const Bundle = styled.div`
text-align: center;
color: #212121;
margin-top: 25px;
font-weight: bold;
`;
const AddMore = styled.div`
text-align: center;
color: #212121;
margin-top: 12px;
`;

function App({toggleSidebar}) {
  

  return (
    <> 
      <Overlay />
      <Sidebar >
        <Head><LeftArrow onClick={()=>{toggleSidebar()}}/>
        <Text>Keep Shoping </Text>
        <Count>{0} Item(s)</Count>
        </Head>
        <Bundle>Bundle And Save!</Bundle>
        <AddMore>Add More Save More</AddMore>
        <SliderComponent />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nullam euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Donec euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Etiam euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Proin euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Quisque euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Aliquam euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Phasellus euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Suspendisse euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
        <p>Vestibulum euismod, velit vel bibendum bibendum, velit elit bibendum ipsum.</p>
      </Sidebar>
    </>
  );
}

export default App;