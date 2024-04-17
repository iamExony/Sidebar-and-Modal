import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const OpenModal = () => {
    setIsModalOpen(true);
  };
  const OpenSidebar = () => {
    setIsSidebarOpen(true);
  };
  const CloseModal = () => {
    setIsModalOpen(false);
  };
  const CloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        OpenModal,
        CloseModal,
        OpenSidebar,
        CloseSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
