import React from "react";

interface IProps {
  type: string;
  placeholder?: string;
}
const Input: React.FC<IProps> = ({ type, placeholder }) => {
  return (
    <input type={type} placeholder={placeholder} className="inputComponent" />
  );
};

export default Input;
