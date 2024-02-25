import React from 'react'
import Checkout from './checkout'
import Footer from '../Footer'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    padding: 2% 5%;
`
// const Head = styled.div`
//     width: 100%;

//   `;
// const Logo = styled.img`
// width: 260px;
// height: 50px;
//   `;  

function Index() {
  return (
    <>
    <Wrapper>
      <Checkout />
    </Wrapper>
      <Footer />
    </>
  )
}

export default Index