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
@media (max-width: 767px) {
  padding: 0px 0px;
  margin-bottom: 50px;
}
`;

function Homepage() {
  return (
    <Wrapper>
      <Banner url={"./HomePage/FREE KEYCHAIN WITH EVERY ORDER.webp"}/>
      <Mainservice url={[{data:"./HomePage/1.webp"},{data:"./HomePage/2.webp"},{data:"./HomePage/3.webp"},{data:"./HomePage/4.webp"}]}/>
      <Poster url={"./HomePage/Poster.webp"}/>
      <TwoService url2={"./HomePage/service1.webp"} url1={"./HomePage/service2.webp"} buy1={"Shop Now"} buy2={"Shop Now"}/>
      <Padding>
      <Whatsnew title={"New In"}/>
      </Padding>
    </Wrapper>
  )
}

export default Homepage