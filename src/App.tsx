/* Imports */

// react & nextjs
import { FC, useState } from "react";

// components
import Button from "./ui/Button/Button";
import Modal from "./ui/Modal/Modal";

// libs

// utils
import { AnimatePresence } from "framer-motion";
import { useKeyShortcut } from "./ui/hooks/useKeyShortcut";

// types & interfaces

// css
import "./App.css";

interface Props {}

const App: FC<Props> = ({}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  useKeyShortcut([showModal, setShowModal]);
  const open = (): void => setShowModal(true);
  const close = (): void => setShowModal(false);

  return (
    <>
      <header className="header">
        <h1 id="title">Framer Motion Lib</h1>
      </header>
      <main className="main">
        <div className="p-container">
          <p>
            Esto es un ejemplo de un proyecto que implementa la libreria de
            animacion de react framer motion. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Reiciendis quia saepe nihil
            consequuntur obcaecati non magni dicta incidunt? Error, deserunt
            quaerat sequi est optio temporibus fugit! Id tenetur omnis fugit
            architecto non ipsa at ratione blanditiis, enim cupiditate
            praesentium aspernatur? Eum provident asperiores sed repellat
            reiciendis iusto magni recusandae id.
          </p>
        </div>
        <div className="button-container">
          <span>ctrl + o</span>
          <Button handleClick={open}>Show</Button>
        </div>
        <AnimatePresence>
          {showModal && <Modal backDropClick={close} closeModal={close} />}
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
