import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button style={{fontSize:13, color:"lightblue"}} onClick={onClick}>{text}</button>
    );
}

export default Button;

