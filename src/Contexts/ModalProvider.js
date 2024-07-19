import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  const toggleModalVisibility = () => {
    setShowModal((visibility) => !visibility);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, modalData, setModalData, toggleModalVisibility }}
    >
      {children}
    </ModalContext.Provider>
  );
};
