import React from 'react'
import styled from 'styled-components'
import Header from '../Header';
import Footer from '../Footer';
import Product from './Product'

const Wrapper = styled.div`
`;


function Index() {
  return (
    <Wrapper>
    <Header/>
    <Product/>
    <Footer/>
    </Wrapper>
  )
}

export default Index