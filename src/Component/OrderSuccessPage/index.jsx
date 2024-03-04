import React from 'react'
import styled from 'styled-components'
import OrderSuccessPage from './OrderSuccessPage';
import Footer from '../Footer/Footer';

const Wrapper = styled.div`
padding: 0px 5% 100px 5% ;`;

function Index() {
  return (
    <>
    <Wrapper>
        <OrderSuccessPage />
    </Wrapper>
    <Footer />
    </>
  )
}

export default Index