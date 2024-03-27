//use imported button and input components to create a search bar

import React from 'react';
import Input from '../atoms/Input.tsx';
import Button from '../atoms/Button.tsx';

interface SearchBarProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
}

const SearchBar = ({ value, onChange, onClick }: SearchBarProps) => {
    return (
        <div style={{ maxWidth:'70%', margin: "auto",}}>
            <Input
                placeholder="Search for events"
                value={value}
                onChange={onChange}
            />
            <Button text="Search" onClick={onClick} />
        </div>
    );
}

export default SearchBar;