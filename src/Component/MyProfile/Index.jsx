import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Profile from './Profile'
import styled from 'styled-components'

const Wrapper = styled.div`

`;

function Index() {
    return (
        <Wrapper>
            <Header />
            <Profile />
            <Footer />
        </Wrapper>
    )
}

export default Index