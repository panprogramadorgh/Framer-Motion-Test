import { useEffect, Dispatch, SetStateAction } from "react";

export function useKeyShortcut(
  showModalState: [boolean, Dispatch<SetStateAction<boolean>>]
) {
  useEffect(() => {
    const checkWindow = (): boolean => typeof window !== "undefined";

    // Funcion encargada de dar la vuelta al estado
    const handleKeyDown = (event: KeyboardEvent) => {
      event.preventDefault();
      if (event.key === "o" && event.ctrlKey) {
        const [showModal, setShowModal] = showModalState;
        setShowModal(!showModal);
      }
    };

    if (checkWindow()) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (checkWindow()) {
        window.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [showModalState[0]]);
}
