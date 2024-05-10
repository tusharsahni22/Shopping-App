import React from 'react';
import styled from 'styled-components';
import { HiOutlineShare } from 'react-icons/hi';

const Share = styled(HiOutlineShare)`
  font-size: 1.5rem;
  color: black;
  `;

const ShareButton = ({ url, title, text }) => {
  const shareData = { title, text, url };

  const handleShare = async () => {
    try {
      await navigator.share(shareData);
    } catch(err) {
      console.error('Share failed:', err.message);
    }
  };

  // Check if the Web Share API is available
  const isShareSupported = navigator && navigator.share;

  return (
    isShareSupported && (
      <button style={{border:"none",background:"none"}} onClick={handleShare}>
        <Share/>
      </button>
    )
  );
};

export default ShareButton;