import Footer from '../Footer'
import Head from './Head'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom';


const Wrapper = styled.div`

`;

function Index() {
    const location = useLocation();
    const {favorites,OrderHistoryTab,YourProfileTab}=location.state;
    console.log("m",favorites,OrderHistoryTab,YourProfileTab)

    
    return (
        <Wrapper>
            <Head state={favorites} OrderHistoryTab={OrderHistoryTab} YourProfileTab={YourProfileTab}/>
            <Footer />
        </Wrapper>
    )
}

export default Index