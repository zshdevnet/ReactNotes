import React from "react";
import styles from './Button.module.css';
import { FcLike } from "react-icons/fc";

interface Props {
  children: string;
  color?: "primary" | "danger" | "secondary" | "success" | "warning" | "info";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={[styles.btn, styles['btn-'+color]].join(' ')} onClick={onClick} color="">
      <FcLike />
    </button>
  );
};

export default Button;
