import React from "react";
import Input from "../atoms/Input.tsx";
import Button from "../atoms/Button.tsx";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

const SearchBar = ({ value, onChange, onClick }: SearchBarProps) => {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: "auto",
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Input
        placeholder="Search for events"
        value={value}
        onChange={onChange}
      />
      <Button text="Search" onClick={onClick} />
    </div>
  );
};

export default SearchBar;
