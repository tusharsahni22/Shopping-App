import React from 'react'
import styled from 'styled-components'
import Header from '../Header';
import Footer from '../Footer';
import ProductDesc from "./Product"

const Wrapper = styled.div`
padding: 0px  0 100px 5% ;
`;


function Index() {
  return (
    <div>

    <Header/>
    <Wrapper>
    <ProductDesc/>
    </Wrapper>
    <Footer/>
    </div>
  )
}

export default Index