/* Imports */

// react & nextjs
import { FC } from "react";

// components
import Backdrop from "../Backdrop/Backdrop";

// libs
import { motion, Variants } from "framer-motion";

// utils

// types & interfaces

// css
import "./Modal.css";

const dropIn: Variants = {
  hidden: {
    y: "0",
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: "0",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 50,
      stiffness: 800,
    },
  },
  exit: {
    y: "0",
    opacity: 0,
    scale: 0.8,
  },
};

interface Props {
  backDropClick: React.MouseEventHandler;
  closeModal: () => void;
}

const Modal: FC<Props> = ({ backDropClick, closeModal }) => {
  return (
    <Backdrop handleClick={backDropClick}>
      <motion.div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="Modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <strong>Hello World</strong>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          non ratione dolores expedita deserunt dicta voluptates eaque voluptate
          at enim.
        </p>
        <button onClick={closeModal}>Accept</button>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
