import React from 'react';

interface InputProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, value, onChange }: InputProps) => {
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ padding:10,borderTopLeftRadius:"20px", borderBottomLeftRadius:"20px", width: "70%",height:15, backgroundColor:'lightblue', marginLeft:"10%"}}
            

            

        />
    );
}

export default Input;