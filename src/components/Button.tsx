import React from "react";
interface ButtonProps {
  text: string;
  theme?: string;
  onPress?: React.MouseEventHandler<HTMLButtonElement>

}
const Button: React.FC<ButtonProps> = ({ text, theme, onPress }) => {
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
    <button className={buttonClassName} onClick={onPress}>
      <p className={buttonText}>{text}</p>
    </button>
  );
};

export default Button;
