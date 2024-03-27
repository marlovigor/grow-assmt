///create card image atom with typescript

import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return <img style={{width:200,marginRight: 10}} src={src} alt={alt} />;
};

export default Image;