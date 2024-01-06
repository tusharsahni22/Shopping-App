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
      <Poster url={"https://streetswear-product.s3.ap-south-1.amazonaws.com/Beige%20Aesthetic%20Fashion%20Clothing%20Collection%20Medium%20Banner.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCmFwLXNvdXRoLTEiRzBFAiBpbbmpZ1oVMuW%2By0agdN%2F0GR1j9wr67U4eyyrkBZ%2BTZgIhAOYE7HOYtH0DRS82%2B3lKzTo5%2F7dmvdF7un5sexSq66dgKu0CCKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMOTc1MDUwMDQyNTkyIgzCteb9aIfv0MESS8YqwQKTYBD29AzNry5bm80POepnLSQjIe99cyOomFY2L4iuddg2C3YpB1DyUd2dQ%2Fd5tkugsBfC8agsYgpYHepdOvidMO7PwFh%2F2N4SnfOdQyBbfqvYq%2F3bJbMrSWFehmw9fyiDE5zPYcLEtYAAsyr3N0BbWZtxhz%2FwCYcd6a20trpseK99TrvV%2Fb77KnwmVsfr3tigYIeXcNDCaM3c87xN5xQBsZVhc3RaZaWYqgrRMek%2FVbK753jDAvpquaa1N6oct8sJHlFC%2FJDMvPQ4gzeQqSynPBjvWqqQ1WnYcWDs510ITVFERb6WUYG8WPri3H0LnulEVCzADLOazU9vzTJ4S6vJnrY6bjcm5nlXL61zQNfPAnjoAvXZWmgzruNz62u7g0NYeQgjawgdu3waYN7T4qpEtIsi%2Bzw3iiuDwRhZj7PZnZAwmafkrAY6swJ6ixyYvkPsAONSm6CaKhR0isp6p3M%2BnhMhAtwyAua3vEoZ7tcNyxXNqv%2F8WStl%2BS9LSYBO2ybzG%2BamtekUvwNbauTiPGROcQ%2FYkt%2FjiKfnirFXCIOhcs1CF2%2BmOrMh23O0W3Osm0FOghEkTKaD9ZWr6UUIx6OE5deQAxPQbrP7ThXMs8JgdxqgWQgFIfdB%2B5Wi9v5CatMl3msE4Fwc8GwG23fFoHx%2BHruAPOVednsUpk%2BodOaBOyxbUc85ld6PnciE3DGAfVpxqkV998m6%2BbMhGPJeYDBUaoCm1YFygCmUiac8vK52eXz%2BiCT0WuomvcMOm5sbW3ExJ3%2FU9i8x4BhfcKlr1Z09iOkbvrjLGLwt8sIQZQ6Vh%2BwxRi99n2aLLBS6ezRb1V%2Fm7%2BcypKk9OWGnX4rj&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240106T085452Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA6GBMC5TQL5COJDO6%2F20240106%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=6ffd3ae4f222fd1a40532224fbbc39e5de1e7e23cd3817791449caa479fb4b2a"}/>
      <TwoService url2={"./service1.jpg"} url1={"./service2.jpg"} buy1={"Shop Now"} buy2={"Shop Nail Art Strips"}/>
      <Padding>
      <Whatsnew title={"New In"}/>
      </Padding>
    </Wrapper>
  )
}

export default Homepage