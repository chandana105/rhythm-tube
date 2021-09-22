import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModalVisibility = () => {
        console.log('ran')
        setShowModal(visibility => !visibility)
    }

  return (
    <ModalContext.Provider
      value={{showModal, toggleModalVisibility}}
    >
      {children}
    </ModalContext.Provider>
  );
};
