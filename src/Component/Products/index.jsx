import React from 'react'
import styled from 'styled-components'
// import Header from '../Header';
import Footer from '../Footer';
import Product from './Product'

const Wrapper = styled.div`
padding: 0px  0 100px 5% ;
@media (max-width: 767px) {
  padding: 0px 2% 50px 2%;
}
`;


function Index() {
  return (
    <div>

    {/* <Header/> */}
    <Wrapper>
    <Product/>
    </Wrapper>
    <Footer/>
    </div>
  )
}

export default Index