///create card image atom with typescript

import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img style={{width:"80%", borderRadius:20}} src={src} alt={alt} />;
};

export default Image;