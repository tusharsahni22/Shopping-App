import React,{useState} from 'react'
import styled from 'styled-components'
import Profile from './Profile';
import OrderHistory from './OrderHistory';
import Favorites from './Favorites';


const Wrapper = styled.div`
padding: 0 10%;
`;
const Head = styled.div`
margin: 70px 0 0 0 ;
display: flex;
justify-content: center;
gap: 20px;
`;
const Title = styled.div`
font-size: 15px;
font-weight: 500;
color: #000000;
text-decoration: ${props => props.selected ? 'underline' : 'none'};
&:hover{ 
    cursor: pointer;
}
`;

function HeadComponent({state,OrderHistoryTab,YourProfileTab}) {
    const [selectedTitle, setSelectedTitle] = useState(state || OrderHistoryTab || YourProfileTab ||'Your Profile');
  return (
    <Wrapper>
        <Head>
            <Title selected={selectedTitle === 'Your Profile'} onClick={() => setSelectedTitle('Your Profile')}>Your Profile</Title>
            <Title selected={selectedTitle === 'Order History'} onClick={() => setSelectedTitle('Order History')}>Order History</Title>
            {/* <Title selected={selectedTitle === 'Reward'} onClick={() => setSelectedTitle('Reward')}>Reward</Title> */}
            <Title selected={selectedTitle === 'Favorites'} onClick={() => setSelectedTitle('Favorites')}>Favorites</Title>
        </Head>
        {selectedTitle === 'Your Profile'? <Profile/> : null}
        {selectedTitle === 'Order History'? <OrderHistory/> : null}
        {/* {selectedTitle === 'Reward' && <div>Reward</div>} */}
        {selectedTitle === 'Favorites'? <Favorites/> : null}

    </Wrapper>
  )
}

export default HeadComponent