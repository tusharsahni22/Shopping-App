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
      <Banner url={"./FREE KEYCHAIN WITH EVERY ORDER.jpg"}/>
      <Mainservice url={[{data:"./Mainserice/1.jpg"},{data:"./Mainserice/2.jpg"},{data:"./Mainserice/3.jpg"},{data:"./Mainserice/4.jpg"}]}/>
      <Poster url={"./Poster.jpg"}/>
      <TwoService url2={"./service1.jpg"} url1={"./service2.jpg"} buy1={"Shop Now"} buy2={"Shop Now"}/>
      <Padding>
      <Whatsnew title={"New In"}/>
      </Padding>
    </Wrapper>
  )
}

export default Homepage