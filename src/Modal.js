import React, { useEffect, useState } from "react";

const Modal = ({ modalContent, closeModal }) => {
  const [width, setWidth] = useState('100%');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth('0%');
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="absolute w-80 h-20 bg-white top-2 right-32 rounded">
      <h1 className="text-lg pt-4 px-4 h-[76px] text-gray-500">
        {modalContent}
      </h1>
      <aside
        className={`h-1 bg-green-500 ease-in-out duration-8000`}
        style={{ width: width, transition: "width 3s" }}
      ></aside>
    </div>
  );
};

export default Modal;
