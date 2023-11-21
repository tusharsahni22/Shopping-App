import styled from "styled-components";
import SlideShow from "./Slide";
import { IoIosSearch } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { TiShoppingCart as TbHistory } from 'react-icons/ti';
import { BiUserCircle,BiLogOutCircle } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import AddToCart from "../Cart/AddToCart";
import { useEffect, useState } from "react";
import SignupPage from "../Auth";
import Sidebar from "./Sidebar";
import { doLogout, isUserLoggedIn } from "../Services/auth";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
`;
const Slide = styled.div`
  height: 36px;
  background-color:#212121;
`;
const Members = styled.div`
display: flex;
justify-content: flex-end;
padding-right: 50px ;
background-color: #F4F5F7;
height: 30px;
`;

const Content =styled.div`
font:12px roboto;
padding: 7px 5px;
&:hover{
  cursor: pointer;
  color: gray;
}
`;

const Menu =  styled.div`
display:flex;
justify-content: space-between;
padding: 16px 3.5rem;
width: auto;
@media (max-width:1024px){
  padding: 16px 12px;
}
`;
const Search =  styled.div`
display: flex;
justify-content: space-between;
border: 1px solid #9FA6B2;
width: 100%;
height: 40px;
padding-right: 18px;
padding-left: 16px;
margin-left: 25px;
align-items: center;
border-radius: 7px;
@media (max-width:768px){
  display: none;
}

`;
const Input =  styled.input`
border:none;
width: 100%;
font-size: 15px;
outline: none;
`;
const Img = styled.img`
width:200px;
height:30px;
padding: 6px 0;
&:hover{
  cursor: pointer;
}
@media (max-width:1024px){
  padding: 6px 12px;
  display: none;
}
`;
const ImgMob = styled.img`
width:200px;
height:30px;
padding: 0px 10px;
&:hover{
  cursor: pointer;
}
`;

const User = styled.div`
  display: flex;
  width: auto; 
`;

const Tags= styled.div`
padding :4px 4px 0 0;
margin: 0 10px;
display: flex;
@media(max-width:1024px){
padding :1px 4px 0 0;
}
 `;
 const TagLine= styled.div`
 padding :4px 4px 0 0;
 margin: 0 5px;
 display: flex;
 width: 155px;
 @media (max-width:1024px){
  display: none;
}
`;
const Usericon= styled.div`
  padding :10px 0px 0 0;
  margin: 0 0 0 20px;
  border-radius: 25px;
  display: flex;
  &:hover{
    cursor: pointer;
    background-color:#F4F5F7;
  }
  @media (max-width:1024px){
  display: none;
}
 `;
const MobileMenu= styled.div`
  display: flex;
  @media (min-width:1025px){
  display: none;
}
 `;
const DropDown= styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10.5em 22px 10.5em;
 `;
 

 const Div= styled.div`
 display: none;
 position: absolute;
  `;
const Text= styled.div`
margin-right: 5px;
&:hover{
  ${Div}{
  display: flex;
  background-color: white;
  left: 0;
  width: 80%;
  padding: 0 10%;
  position: absolute;
  height: 350px;
  z-index: 1;
  justify-content: center;
  cursor: pointer;
}} `;

const Option= styled.div`
display: flex;
font-weight: bold;
&:hover{
  cursor: pointer;
}
 `;
const Title= styled.div`
margin-top: 50px;
font-weight: bold;
 `;
const Element= styled.div`
margin-top: 10px;
font-weight: 100;
 `;
 const Section= styled.div`
padding:20px 50px;
  `;
const CartIcon =styled(AiOutlineShoppingCart)`
width: 25px;
height: 25px;
padding: 8px;
&:hover{
  background-color:#F4F5F7;
    cursor:pointer;
    border-radius:17px;   
}
`
const Heart =styled(BsHeart)`
width: 25px;
height: 25px;
padding: 8px;
border-radius:17px;
&:hover{
  background-color:#F4F5F7;
    cursor:pointer;    
}
`
const UserIcon =styled(BiUserCircle)`
width: 25px;
height: 25px;
padding-left: 10px;
@media(max-width:1024px){
  display: none;
}
`
const Logout =styled(BiLogOutCircle)`
width: 25px;
height: 25px;
padding-left: 10px;
@media(max-width:1024px){
  display: none;
}
`
const OrderHistory =styled(TbHistory)`
width: 25px;
height: 25px;
padding-left: 10px;
&:hover{
  background-color:#F4F5F7;
    cursor:pointer;
    border-radius:17px;   
}
`
const ProfileMenu= styled.div`
display: none;
border-radius: 15px;
position: absolute;
background-color: white;
z-index: 1;
color: black;
`;

const MyProFile =styled.div`
padding :4px 4px 0 0;
margin: 0 5px;
display: flex;
width: 155px;
@media (max-width:1024px){
 display: none;
}
&:hover{
  ${ProfileMenu}{
  display: flex;
  flex-direction: column;
  background-color: white;
  top: 128px;
  right:185px;
  width: 180px;
  padding: 0 15px;
  position: absolute;
  height: 150px;
  z-index: 1;
  padding: 10px 10px;
  cursor: pointer;
  gap: 10px;

  outline: 1px solid #9FA6B2;
}}
`;

const ProfileOption =styled.div`
height: 20px;
gap: 10px;
padding: 10px 0px;
display: flex;
align-items: center;
&:hover{
  background-color:#F4F5F7;
    cursor:pointer;
    border-radius:10px;
}
`;
const CartItemCount =styled.div`
position: absolute;
padding: 0 0 0 32px;
`;

function Header() {
  const navigate = useNavigate();
  const totalItems = parseInt(useSelector((state) => state.totalItems)) || ""

  const [AddCartToggle, setAddCartToggle] = useState(false);
  const [signup, setSignup] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [LoggedIN, setLoggedIN] = useState(false);

  useEffect(() => {
    setLoggedIN(isUserLoggedIn());
  }, [signup]);

  const toggleAddtocart = () => {
    setAddCartToggle(!AddCartToggle);
  };
  const toggleSignup = () => {
    setSignup(!signup)
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar)
  };
  return (
    <>
    {AddCartToggle? <AddToCart toggleAddtocart={toggleAddtocart}/> :""}
    {signup?<SignupPage toggleSignup={toggleSignup} /> :""}
    {sidebar?<Sidebar toggleSidebar={toggleSidebar} /> :""}
    
    <Wrapper >
      <Slide><SlideShow /></Slide>
      <Members>
        <Content>India</Content>
        <Content>Contact Us</Content>
        <Content>Student Discount</Content>
        <Content>Rewards</Content>
        <Content>Help</Content>
      </Members>
      <Menu>
        <MobileMenu>
        <FiMenu onClick={toggleSidebar} style={{width:"25px",height:"25px"}}/>
        <ImgMob src="./logo.jpg" alt="logo" onClick={(e)=>{navigate("/")}}/>
        </MobileMenu>
        <Img src="./logo.jpg" alt="logo" onClick={(e)=>{navigate("/")}}/>
        <Search>
        <Input type="text" placeholder="Find something you will love!"/>
        <IoIosSearch style={{height:"26px",width:"20px"}}/>
        </Search>
        <User>
        {LoggedIN?<Usericon>
          <UserIcon />
          <MyProFile>MY ACCOUNT 
          <ProfileMenu>
            <ProfileOption onClick={()=>{navigate("/myprofile",{state:{YourProfileTab:"Your Profile"}})}}><UserIcon/> My Profile</ProfileOption>
            <ProfileOption onClick={()=>{navigate("/myprofile",{state:{OrderHistoryTab:"Order History"}})}}><OrderHistory/>Order History</ProfileOption>
            <ProfileOption onClick={()=>{doLogout()}}
            ><Logout/>LogOut</ProfileOption>
          </ProfileMenu>
          </MyProFile>
          </Usericon>:
        <Usericon onClick={toggleSignup}>
          <UserIcon />
          <TagLine>JOIN & GET 20% OFF </TagLine>
          </Usericon>}
          <Tags><Heart onClick={()=>{navigate("/myprofile",{state:{favorites:"Favorites"}})}}/></Tags>
          <Tags><CartIcon onClick={toggleAddtocart} /><CartItemCount>{totalItems}</CartItemCount></Tags>  
        </User>
        
      </Menu>
      <DropDown>
        <Option><Text>New
        <Div>
        <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        </Div>
      </Text></Option>
        <Option><Text>Tattoos<Div>
          <Section>
          <Title>By Size</Title>
          <Element>Small</Element>
          <Element>Medium</Element>
          <Element>Large</Element>
          <Element>Extra-Large</Element>
          <Element>Shop All</Element>
          </Section>
          <Section>
          <Title>BY PRODUCT</Title>
          <Element>New In</Element>
          <Element>Bundles</Element>
          <Element>Mystery Bundles</Element>
          <Element>Finger Packs</Element>
          <Element>Sale</Element>
          <Element>Accessories</Element>
          <Element>Gift Card</Element>
          <Element>Shop All</Element>
          </Section>
          <Section>
          <Title>BY CATEGORY</Title>
          <Element>Floral</Element>
          <Element>Minimal</Element>
          <Element>Butterfly</Element>
          <Element>Quotes</Element>
          <Element>Shop All</Element>
          </Section>
        </Div></Text></Option>
        <Option><Text>Nail<Div>
          <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
          </Section>
          <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        </Div></Text></Option>
        <Option><Text>Custom<Div>
        <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
          </Section>
          <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        </Div></Text></Option>
        <Option><Text>Tattoo Maker<Div>
          <Section>
          <Title>TATTOO MARKER</Title>
          <Element>Tattoo Markers</Element>
          <Element>Pro Kit</Element>
          <Element>Freehand Kits and Duos</Element>
          <Element>Accessories</Element>
          <Element>Trace App</Element>
          </Section>
          <Section>
          <Title>WHATS NEW?</Title>
          <Element>Nail</Element>
          <Element>Pro Kit</Element>
          <Element>Extra-Large Tattoos</Element>
          <Element>New Tattoos</Element>
        </Section>
        </Div></Text></Option>

      </DropDown>
    </Wrapper>
    </>

  );
}

export default Header;
