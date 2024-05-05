import React from 'react';
import { HiOutlineShare } from 'react-icons/hi';

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
        <HiOutlineShare/>
      </button>
    )
  );
};

export default ShareButton;