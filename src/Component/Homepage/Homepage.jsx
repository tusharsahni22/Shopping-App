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
      <Banner url={"./FREE KEYCHAIN WITH EVERY ORDER.jpg"}/>
      <Mainservice url={[{data:"./Mainserice/1.jpg"},{data:"./Mainserice/2.jpg"},{data:"./Mainserice/3.jpg"},{data:"./Mainserice/4.jpg"}]}/>
      <Poster url={"https://streetswear-product.s3.ap-south-1.amazonaws.com/Poster.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCmFwLXNvdXRoLTEiSDBGAiEAwc%2FAqDlpTYYGUFIyVDhc%2F2PXtun1bPYOjmTTuOuQ94YCIQCIpqU7Re70Byq7puH%2BrSvVWZ7UxNohbhtUyPcuQ%2F7AlSrtAgii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDk3NTA1MDA0MjU5MiIMv0ojuO5FMn1ohykgKsECHsD5r2DBkJC7CccY%2BEA8BA2NBa6DKLgqhcDyJYzHOmUyi8GLSV3oas6sdVLsaRU%2FoOqekzydzxfKc8RVbaPxP23UaRQP9OC42ELWMoGhj44xKvJoo03ze5sz9DSY0TJwrraZIpFxxLfgZZfSWocFtAcGf8fhmS%2FNKHU3DLttApt46KA3V3F%2FSBUevNkvVNnG0HFD1aO5CO8tnQuECpoCIXkhaGYNrR8HEZDuGk%2BgUJ2%2FoEKF1so4%2FliyiluQh01sz60b4cxp50NI5bcmVxStEVT8Hq8VyLsY6cWG8u%2Bag6Ex0y9vvg3331queYKkadoX1F%2FQLqXKN%2BkwMYJ%2Fn8tpARSU0qZUv387u6eeGrDswKxddC8gGiCzTjxrE2kD0IK6qeU53KNq9yYEaX%2F2uyQTJgiRtSwodrrnhP3ezcw7%2Fx9BMPay5KwGOrICdGRJvY9x6UG8XLASSQo5%2FvgOwMnU%2Bc7AQk4ZdszE90FcA3TjOcwpQ2wzjeGRQQQVoIfQ407%2FypYXPhl%2BoKneNXiMaxilmZRxBwt5IpIpWCNiJQO3lXJBUesbal6kpR88X%2FXy%2B9bQNctZ3FcelVXID4w91azQCkyR4wacg73QuB4fsSX0OaNGhDDmLvtlwEBjkCIYXnkd%2BKVGAe9psnwoXE9%2BailEDjmuE9q0lsqYKOnb47RHWm%2F6OSedJo2pAnpEMhE8lZS1jX%2BOCEeUG96ENXGlePGD85Nz2mssmzpFRrDMBOq0Gnii0m4nllYblorTse3WSqWvtkj0ZUnLfAWY3uYb%2FbgafYyY2Pq51V%2BfNlmW2Q1dRm%2FlLI%2BmdXLnFvbsvLx%2FaiCHVGPWet%2B6S9ijDAxb&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240106T092026Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA6GBMC5TQHMIJ3K6F%2F20240106%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6bf32c91932912e5ebb40e2dba1c04e78eccbb67579662900b6e7cf36e53cb40"}/>
      <TwoService url2={"./service1.jpg"} url1={"./service2.jpg"} buy1={"Shop Now"} buy2={"Shop Nail Art Strips"}/>
      <Padding>
      <Whatsnew title={"New In"}/>
      </Padding>
    </Wrapper>
  )
}

export default Homepage