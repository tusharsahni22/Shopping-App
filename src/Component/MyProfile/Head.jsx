import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { CiClock2,CiLocationOn} from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdFavoriteBorder,MdOutlinePassword } from "react-icons/md";
import { SlHandbag } from "react-icons/sl";
import {IoPowerOutline}from "react-icons/io5"
import { doLogout } from '../Services/auth';
import { useNavigate } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import Favorites from './Favorites';
import Profile from "./Profile"
import Clock from "./clock";
import MyAddress from './myAddress';
import ChangePassword from './changePassword';
import { getProfileInformation } from '../Services/profile';
import Avatar from "./avatar"

const Wrapper = styled.div`
padding: 0 5%;
display: flex;
gap: 50px;
margin: 0 0 100px 0px;
`;
const Head = styled.div`
// margin: 70px 0 0 0 ;
width: 560px;
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
gap: 25px;
border-radius: 25px;
padding: 15px;
box-shadow: 0 2px 5px #00000029, 0 2px 10px #0000001f;
height: 65px;
`;
const Name =styled.div`
margin: 8px 0 5px;
    font-size: 20px;
    font-weight: 400;
letter-spacing: 0.025em;

`;
// const Time =styled.div`

// `;
// const Profilepic =styled.img`
// margin-right: 20px;
//     width: 61px;
//     height: 61px;
//     min-width: 61px;
//     min-height: 61px;
//     border-radius: 100%;
// `;
const Ganta =styled(CiClock2)`
margin-right: 10px;
`;

function HeadComponent({state,OrderHistoryTab,YourProfileTab}) {
  
    const  navigate  = useNavigate()
    const [profileInformation, setProfileInformation] = useState({name:"Guest"}) // [{}
    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good Morning' : (hour < 18 ? 'Good Afternoon' : 'Good Evening');
    const [selectedTitle, setSelectedTitle] = useState(state || OrderHistoryTab || YourProfileTab ||'Your Profile');
    const handleLogout = () => {
      navigate("/")
      doLogout()
  }
  useEffect(() => {
    getProfileInformation().then((res) => {
        setProfileInformation(res.data)
    }).catch((err) => {
            console.log("err",err)
        })
    
    }, [])
   
  return (
    <Wrapper>
        <Head>
          <ProfileBar>
            <Avatar name={profileInformation.name}/>
            {/* <Profilepic src='./whatsnew3.jpg'/> */}
            <div>
              <Name>{profileInformation.name|| "Guest"}</Name>
              <div style={{display:"flex"}}><Ganta /><Clock/></div>
            </div>
          </ProfileBar>
            <Title selected={selectedTitle === 'Your Profile'} onClick={() => setSelectedTitle('Your Profile')}><FiUser/>My Profile</Title>
            <Title selected={selectedTitle === 'Order History'} onClick={() => setSelectedTitle('Order History')}><SlHandbag />Order History</Title> 
            <Title selected={selectedTitle === 'Delivery Address'} onClick={() => setSelectedTitle('Delivery Address')}><CiLocationOn />Delivery Address</Title> 
            <Title selected={selectedTitle === 'Favorites'} onClick={() => setSelectedTitle('Favorites')}><MdFavoriteBorder />Favorites</Title>
            <Title selected={selectedTitle === 'Change Password'} onClick={() => setSelectedTitle('Change Password')}><MdOutlinePassword />Change Password</Title>
            <Title selected={selectedTitle === 'Logout'} onClick={() =>{handleLogout()}}><IoPowerOutline />Logout</Title>
        </Head>
        {selectedTitle === 'Your Profile'? <Profile greeting={greeting} profileInformation={profileInformation}/> : null}
        {selectedTitle === 'Order History'? <OrderHistory name={profileInformation.name} greeting={greeting}/> : null}
        {selectedTitle === 'Favorites'? <Favorites name={profileInformation.name} greeting={greeting}/> : null}
        {selectedTitle === 'Delivery Address'? <MyAddress name={profileInformation.name} greeting={greeting}/> : null}
        {selectedTitle === 'Change Password'? <ChangePassword name={profileInformation.name} email={profileInformation.email} greeting={greeting}/> : null}


    </Wrapper>
  )
}

export default HeadComponent