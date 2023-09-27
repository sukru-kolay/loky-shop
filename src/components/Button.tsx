import React from "react";
interface ButtonProps {
  text: string;
  theme?: string;
}
const Button: React.FC<ButtonProps> = ({ text, theme }) => {
  // const buttonClassName = theme === "secondary" ? "secondary-button" : "button";
  let buttonClassName = "";
  let buttonText = "buttonText";
  if (theme === "secondary") {
    buttonClassName = "secondary-button";
  } else if (theme === "outlineButton") {
    buttonClassName = "outlineButton";
    buttonText = "buttonText white";
  } else {
    buttonClassName = "button";
  }
  return (
    <button className={buttonClassName}>
      <p className={buttonText}>{text}</p>
    </button>
  );
};

export default Button;
