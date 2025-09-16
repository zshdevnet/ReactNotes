import React from "react";

interface Props {
  children: string;
  color?: "primary" | "danger" | "secondary" | "success" | "warning" | "info";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick} color="">
      {children}
    </button>
  );
};

export default Button;
