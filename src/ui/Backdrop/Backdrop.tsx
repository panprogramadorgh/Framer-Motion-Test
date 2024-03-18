/* Imports */

// react & nextjs
import { FC } from "react";

// components

// libs
import { motion } from "framer-motion";

// utils

// types & interfaces

// css
import "./Backdrop.css";

interface Props {
  children: React.ReactNode;
  handleClick: React.MouseEventHandler;
}

const Backdrop: FC<Props> = ({ children, handleClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.1,
        },
      }}
      onClick={handleClick}
      className="Backdrop"
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
