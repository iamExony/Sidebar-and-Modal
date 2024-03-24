import React, { useEffect, useState } from "react";

const Modal = ({ closeModal, modalContent, singleItems, modalColor }) => {
  const [width, setWidth] = useState("100%");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setWidth("0%");
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 100);

    return () => clearTimeout(timeOut);
  }, [singleItems]);

  /*   useEffect(() => {
    const timeOut = setTimeout(() => {
      setWidth("0%");
      setTimeout(() => {
        closeModal();
      }, 3000);
    }, 100);

    return () => clearTimeout(timeOut);
  }, [singleItems]); */

  return (
    <>
      <div className="absolute top-12 right-[25%] md:right-[40%] w-72 h-16 bg-white shadow-md rounded ">
        <div className="w-full h-full flex flex-col items-start justify-center">
          <section
            className={` mx-auto  mt-3 text-xl`}
            style={{ color: `${modalColor}` }}
          >
            {modalContent}
          </section>
          <section
            style={{
              width: width,
              transition: "width 3s",
              background: `${modalColor}`,
            }}
            className={`h-1 mt-5 `}
          ></section>
        </div>
      </div>
    </>
  );
};

export default Modal;
