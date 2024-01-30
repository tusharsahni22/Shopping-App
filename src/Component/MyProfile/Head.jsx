import React,{useState} from 'react'
import styled from 'styled-components'
import { CiClock2,CiLocationOn} from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdFavoriteBorder,MdOutlinePassword } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import {IoPowerOutline}from "react-icons/io5"
import { doLogout } from '../Services/auth';
import OrderHistory from './OrderHistory';
import Favorites from './Favorites';
import Profile from "./Profile"
import Clock from "./clock";

const Wrapper = styled.div`
padding: 0 10%;
display: flex;
`;
const Head = styled.div`
margin: 70px 0 0 0 ;
width: 275px;
box-shadow: 0 2px 10px #0000001f;
border-radius: 25px;
display: flex;
flex-direction: column;
gap: 20px;
`;
const Title = styled.div`
font-size: 15px;
height: 30px;
padding: 5px 35px;
font-weight: 500;
display: flex;
gap: 10px;
color: #000000;
text-decoration: ${props => props.selected ? 'underline' : 'none'};
&:hover{ 
    cursor: pointer;
}
`;
const ProfileBar =styled.div`
display:flex;
padding: 15px;
`;
const Name =styled.div`
margin: 8px 0 5px;
    font-size: 20px;
    font-weight: 400;
letter-spacing: 0.025em

`;
// const Time =styled.div`

// `;
const Profilepic =styled.img`
margin-right: 20px;
    width: 61px;
    height: 61px;
    min-width: 61px;
    min-height: 61px;
    border-radius: 100%;
`;
const Ganta =styled(CiClock2)`
margin-right: 10px;
`;
function HeadComponent({state,OrderHistoryTab,YourProfileTab}) {
    const [selectedTitle, setSelectedTitle] = useState(state || OrderHistoryTab || YourProfileTab ||'Your Profile');
   
  return (
    <Wrapper>
        <Head>
          <ProfileBar>
            <Profilepic/>
            <div>
              <Name>Tushar Sahni</Name>
              <div style={{display:"flex"}}><Ganta /><Clock/></div>
            </div>
          </ProfileBar>
            <Title selected={selectedTitle === 'Your Profile'} onClick={() => setSelectedTitle('Your Profile')}><FiUser/>My Profile</Title>
            <Title selected={selectedTitle === 'Order History'} onClick={() => setSelectedTitle('Order History')}><SlHandbag />Order History</Title> 
            <Title selected={selectedTitle === 'Delivery Address'} onClick={() => setSelectedTitle('Delivery Address')}><CiLocationOn />Delivery Address</Title> 
            <Title selected={selectedTitle === 'Favorites'} onClick={() => setSelectedTitle('Favorites')}><MdFavoriteBorder />Favorites</Title>
            <Title selected={selectedTitle === 'Change Password'} onClick={() => setSelectedTitle('Change Password')}><MdOutlinePassword />Change Password</Title>
            <Title selected={selectedTitle === 'Logout'} onClick={() =>{doLogout()}}><IoPowerOutline />Logout</Title>
        </Head>
        {selectedTitle === 'Your Profile'? <Profile/> : null}
        {selectedTitle === 'Order History'? <OrderHistory/> : null}
        {selectedTitle === 'Favorites'? <Favorites/> : null}
        {selectedTitle === 'Delivery Address'? <Favorites/> : null}
        {selectedTitle === 'Change Password'? <Favorites/> : null}


    </Wrapper>
  )
}

export default HeadComponent