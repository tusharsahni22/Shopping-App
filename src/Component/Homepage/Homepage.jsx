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
      <Banner url={"./banner.jpg"}/>
      <Mainservice url={[{data:"Service.jpg"},{data:"Service.jpg"},{data:"Service.jpg"},{data:"Service.jpg"}]}/>
      <Poster url={"./Poster.jpg"}/>
      <TwoService url2={"./Service2.jpg"} url1={"./Service3.jpg"} buy1={"Shop Now"} buy2={"Shop Nail Art Strips"}/>
      <Padding>
      <Whatsnew title={"New In"}/>
      </Padding>
    </Wrapper>
  )
}

export default Homepage