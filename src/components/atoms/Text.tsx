import React from 'react';

interface TextProps {
  text: string;
}

const Text: React.FC<TextProps> = ({ text }) => {
  return <span style={{fontSize:'10px'}}>{text}</span>;
};

export default Text;