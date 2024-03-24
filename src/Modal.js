import React, { useEffect, useState } from "react";

const Modal = ({ closeModal, modalContent, singleItem, modalColor }) => {
  const [width, setWidth] = useState("100%");

     useEffect(() => {
    const timeOut = setTimeout(() => {
         setWidth("0%");
setTimeout(()=>{ 
    closeModal();
}, 3000)
    }, 100);

    return () => clearTimeout(timeOut);
  }, [singleItem]); 

  return (
    <>
      <div className="absolute top-12 right-[25%] md:right-[40%] w-72 h-16 bg-white shadow-md rounded ">
        <div className="w-full h-full flex flex-col items-start justify-center">
          <section className={`text-${modalColor} mx-auto  mt-3 text-xl`}>{modalContent}</section>
          <section
          style={{ width:width, transition:'width 3s'}}
            className={`h-1 mt-5 bg-${modalColor}`}
          ></section>
        </div>
      </div>
    </>
  );
};

export default Modal;
