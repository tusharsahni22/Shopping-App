import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styled from "styled-components";

const EachSlide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 50px;
`;

const SlideShow = () => {
  return (
    <Slide autoplay={true} transitionDuration={1000}>
      <EachSlide>
        We Ship Worldwide! InkBox Tattos Everywhere
      </EachSlide>
      <EachSlide>
       Buy 3, Get 25% off
      </EachSlide>
      <EachSlide>
       Take 30% Select Style.
      </EachSlide>
    </Slide>
  );
};

export default SlideShow;
