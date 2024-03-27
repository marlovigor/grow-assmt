import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const CardButton = ({ text, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} style={{marginLeft:20}}>{text}</button>
    );
}

export default CardButton;