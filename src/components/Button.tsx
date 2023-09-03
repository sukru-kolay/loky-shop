import React from "react";
interface ButtonProps {
  text: string;
}
const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="button">
      <p className="buttonText">{text}</p>
    </button>
  );
};

export default Button;
