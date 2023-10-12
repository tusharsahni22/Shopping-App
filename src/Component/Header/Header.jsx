import styled from "styled-components";
import SlideShow from "./Slide";
import { IoIosSearch } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiOutlineChevronDown } from 'react-icons/hi';
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
@media (max-width:1023px){
  padding: 6px 12px;
  display: none;
}
`;
const ImgMob = styled.img`
width:200px;
height:30px;
padding: 0px 10px;

`;
const User = styled.div`
  display: flex;
  width: auto;
`
const Tags= styled.div`
padding :10px 34px 0 0;
margin: 0 10px;
display: flex;
 `;
 const TagLine= styled.div`
 padding :12px 34px 0 0;
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
  @media (max-width:1024px){
  display: none;
}
 `;
const MobileMenu= styled.div`
  display: flex;
  @media (min-width:1024px){
  display: none;
}
 `;
const DropDown= styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10.5em 22px 10.5em;
 `;
const Text= styled.div`
margin-right: 5px;
 `;
const Option= styled.div`
display: flex;
font-weight: bold;
 `;
function Header() {
  return (
    <Wrapper>
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
        <FiMenu style={{width:"25px",height:"25px"}}/>
        <ImgMob src="./logo.jpg" alt="logo"/>
        </MobileMenu>
        <Img src="./logo.jpg" alt="logo"/>
        <Search>
        <Input type="text" placeholder="Find something you will love!"/>
        <IoIosSearch style={{height:"26px",width:"20px"}}/>
        </Search>
        <User>
        <Usericon>
          <BiUserCircle style={{width:"25px",height:"25px"}}/>
          </Usericon>
          <TagLine>JOIN & GET 20% OFF </TagLine>
          <Tags><BsHeart style={{width:"25px",height:"25px"}}/></Tags>
          <Tags><AiOutlineShoppingCart style={{width:"25px",height:"25px"}}/></Tags>         
        </User>
      </Menu>
      <DropDown>
        <Option><Text>New</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Tattoos</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Nail</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Custom</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Tattoo Maker</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>New</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Tattoos</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Nail</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Custom</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>
        <Option><Text>Tattoo Maker</Text><HiOutlineChevronDown style={{marginTop:"3px"}}/></Option>

      </DropDown>
    </Wrapper>
  );
}

export default Header;
