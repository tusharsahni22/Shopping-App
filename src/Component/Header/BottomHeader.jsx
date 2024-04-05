import React ,{useState,useEffect} from 'react'
import { isUserLoggedIn } from '../Services/auth';
import styled from 'styled-components'
import { RiHomeSmileLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import LoginPage from '../Auth';
import AddToCart from "../Cart/AddToCart"

const Wrapper = styled.div`
position: fixed;
bottom: 0;
width: 100%;
@media (min-width:768px){
  display:none;
}

`;
const Bar = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
padding: 15px 10px;
outline: 2px solid #f0f0f0;
`;

const Home = styled(RiHomeSmileLine)`
font-size: 25px;
color: black;
`;
const User = styled(FiUser)`
font-size: 25px;
color: black;
`;
const Favorite = styled(MdFavoriteBorder)`
font-size: 25px;
color: black;
`;
const Cart = styled(FaOpencart)`
font-size: 25px;
color: black;
`;

function BottomHeader() {
const navigate = useNavigate();
const [login, setLogin] = useState(false);
const [AddCartToggle, setAddCartToggle] = useState(false);
const [isLoggedIN, setIsLoggedIN] = useState(false);

const toggleLogin = () => {
  isLoggedIN? navigate("/myprofile",{state:{YourProfileTab:"Your Profile"}}):
  setLogin(!login)
};

const toggleAddtocart = () => {
  setAddCartToggle(!AddCartToggle);
};
useEffect(() => {
  setIsLoggedIN(isUserLoggedIn());
}, [login]);

  return (
    <>{login?<LoginPage toggleLogin={toggleLogin} /> :""}
      {AddCartToggle? <AddToCart toggleAddtocart={toggleAddtocart}/> :""}
    <Wrapper>
      <Bar>
        <Home onClick={()=>{navigate("/")}}/>
        <User onClick={toggleLogin}/>
        <Favorite onClick={()=>{navigate("/myprofile",{state:{favorites:"Favorites"}})}} />
        <Cart onClick={toggleAddtocart}/>
      </Bar>
    </Wrapper>
    </>
  )
}

export default BottomHeader