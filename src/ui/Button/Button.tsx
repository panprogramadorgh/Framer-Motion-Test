/* Imports */

// react & nextjs
import { FC, MouseEventHandler } from "react";

// components

// libs
import { motion } from "framer-motion";

// utils

// types & interfaces

// css
import "./Button.css";

interface Props {
  children: React.ReactNode;
  handleClick: MouseEventHandler;
}

const FunctionalComponent: FC<Props> = ({ children, handleClick }) => {
  return (
    <motion.button className="Button" onClick={handleClick}>
      {children}
    </motion.button>
  );
};

export default FunctionalComponent;
