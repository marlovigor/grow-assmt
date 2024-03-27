import React from 'react';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
    return (
        <button style={{fontSize:12, borderTopRightRadius:"20px", borderBottomRightRadius:"20px", padding: 10, backgroundColor: '#007bff', color: 'white', }} onClick={onClick}>{text}</button>
    );
}

export default Button;

