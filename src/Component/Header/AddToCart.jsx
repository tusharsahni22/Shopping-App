import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  position: absolute;
  top: 200;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: #fff;
  overflow-y: scroll;
  z-index: 999;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  /* transform: translateX(100%); */
  backdrop-filter: blur(5px);
`;

function App() {
  

  return (
    <>
      <Sidebar >
        <h2>Sidebar Content</h2>
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