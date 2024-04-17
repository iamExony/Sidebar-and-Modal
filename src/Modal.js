import React from 'react'
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from './Context';

const Modal = () => {
  const {isModalOpen, CloseModal} = useGlobalContext()
  return (
    <>
      <section
        className={`${
          isModalOpen
            ? "absolute z-40  w-full  bg-[rgba(0,0,0,0.5)] h-screen flex items-center justify-center"
            : "hidden "
        }`}
      >
        <div className="relative bg-white md:w-2/5 w-[90%] p-16 rounded flex items-center justify-center">
          <IoClose
            onClick={CloseModal}
            className="absolute top-2 right-2 text-red-800 text-5xl drop-shadow-md cursor-pointer"
          />
          <h1 className="text-3xl ">Modal Content </h1>
        </div>
      </section>
    </>
  );
}

export default Modal