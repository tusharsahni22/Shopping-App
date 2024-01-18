import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const EachSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 30px;
  color: white;
`;


const properties = {
    prevArrow: <button style={{display:"none"}}/>,
    nextArrow: <button style={{display:"none"}}/> 
}

const SlideShow = () => {
   
  return (
    <Slide {...properties} duration="3000" transitionDuration="300">
      <EachSlide>
        We Ship All over India! Streetswear Everywhere
      </EachSlide>
      <EachSlide>
       Buy 2, Get 10% off.
      </EachSlide>
      <EachSlide>
      Buy 3, Get 20% off.
      </EachSlide>
    </Slide>
  );
};

export default SlideShow;
