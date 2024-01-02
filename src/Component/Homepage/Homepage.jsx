import styled from "styled-components"
import Mainservice from "./Mainservice";
import Banner from "./Banner";
import Poster from "./Poster";
import TwoService from "./TwoService";
import Whatsnew from "./Whatsnew";

const Wrapper =  styled.div`
padding: 0px 5% 100px;
`;
const Padding = styled.div`
padding: 0 50px;
`;

function Homepage() {
  return (
    <Wrapper>
      <Banner url={"./FREE KEYCHAIN WITH EVERY ORDER.png"}/>
      <Mainservice url={[{data:"./Mainserice/1.png"},{data:"./Mainserice/2.png"},{data:"./Mainserice/3.png"},{data:"./Mainserice/4.png"}]}/>
      <Poster url={"./Poster.png"}/>
      <TwoService url2={"./service1.png"} url1={"./service2.png"} buy1={"Shop Now"} buy2={"Shop Nail Art Strips"}/>
      <Padding>
      <Whatsnew title={"New In"}/>
      </Padding>
    </Wrapper>
  )
}

export default Homepage