import React from "react";
interface ButtonProps {
  text: string;
  theme?: string;
}
const Button: React.FC<ButtonProps> = ({ text, theme }) => {
  const buttonClassName = theme === "secondary" ? "secondary-button" : "button";
  return (
    <button className={buttonClassName}>
      <p className="buttonText">{text}</p>
    </button>
  );
};

export default Button;
