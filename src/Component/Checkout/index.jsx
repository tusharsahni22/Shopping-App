import React from 'react'
import Checkout from './checkout'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100%;
    padding: 2% 5%;
`
const Head = styled.div`
    width: 100%;

  `;
const Logo = styled.img`
width: 260px;
height: 50px;
  `;  

function Index() {
  return (
    <Wrapper>
      <Head>
        <Logo src="./brand.png"/>
      </Head>
      <Checkout />
    </Wrapper>
  )
}

export default Index