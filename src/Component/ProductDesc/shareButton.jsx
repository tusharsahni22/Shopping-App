import React from 'react';
import styled from 'styled-components';
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';


const Wrapper = styled.div`
@media (max-width: 767px) {
  display: none;
}

`;


const ShareComponent = ({ shareUrl, title }) => (
  <Wrapper>
    <div style={{marginBottom:"10px"}}>Share this product</div>
    <div style={{display:"flex",gap:"5px"}}>

<WhatsappShareButton url={shareUrl} title={title}>
  <WhatsappIcon size={32} round />
</WhatsappShareButton>

<FacebookShareButton url={shareUrl} quote={title}>
  <FacebookIcon size={32} round />
</FacebookShareButton>

<TwitterShareButton url={shareUrl} title={title}>
  <TwitterIcon size={32} round />
</TwitterShareButton>
  </div>
  </Wrapper>
);

export default ShareComponent;