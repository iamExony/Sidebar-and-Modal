import React, { useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./Reducer";


//defualt state
const defaultState = {
  isModalOpen: false,
  modalContent: "",
};
const SingleColor = ({ rgb, weight, hex, index}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  let bkg = rgb.join(",");

  //handle copied function
  const handleCopied = (hex) => {
    const hexColor = `#${hex}`;
    navigator.clipboard.writeText(hexColor);
    dispatch({ type: "COPIED" });
  };

  //Close Modal function
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <article
      key={index}
      style={{
        background: `rgb(${bkg})`,
      }}
      className="w-[241.3px] md:w-[14rem] h-28 cursor-pointer "
      onClick={() => handleCopied(hex)}
    >
      <h1 className={`${index > 10 ? "text-white" : "text-black"} px-8 pt-8`}>
        {weight}%
      </h1>
      <h1
        className={`${index > 10 ? "text-white" : "text-black"} px-8`}
      >{`#${hex}`}</h1>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
    </article>
  );
};

export default SingleColor;
