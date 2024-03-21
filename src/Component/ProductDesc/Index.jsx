import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer';
import ProductDesc from "./Product"

const Wrapper = styled.div`
padding: 3% 10% 0 10% ;
`;

function Index() {
  return (
    <div>
    <Wrapper>
    <ProductDesc/>
    </Wrapper>
    <Footer/>
    </div>
  )
}

export default Index