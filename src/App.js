import React, { useReducer, useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import Modal from "./Modal";
import { reducer } from "./Reducer";

//defualt state
const defaultState = {
  colorList: new Values("#f15025").all(10),
  isModalOpen: false,
  modalContent: "",
};

const App = () => {
  const [selectColor, setSelectColor] = useState(""); //select input color
  const [state, dispatch] = useReducer(reducer, defaultState); //reducer hooks

  //handle input change function
  const handleChange = (e) => {
    setSelectColor(e.target.value);
  };

  //handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let color = new Values(selectColor);
      const mycolors = color.all(10);
      dispatch({ type: "COLOR_ADDED", payload: mycolors });
    } catch (error) {
      const errorMessage = error.message.replace(/^Error: /, "");
      dispatch({ type: "INVALID_COLOR", payload: `${errorMessage}` });
    }
  };
  // console.log(colorList);

  //Close Modal function
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  //Close Button function
  const closeButton = () => {
    dispatch({ type: "CLOSE_BUTTON" });
  };

  //handle copied function
  const handleCopied = (hex) => {
    const hexColor = `#${hex}`;
    navigator.clipboard.writeText(hexColor);
    dispatch({ type: "COPIED" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal
          modalContent={state.modalContent}
          closeModal={closeModal}
          closeButton={closeButton}
        />
      )}
      <section className="flex my-[60px] ml-8 md:ml-2 gap-12 justify-center flex-col md:items-center md:flex-row">
        <h1 className="text-2xl">Color Generator</h1>
        <div>
          <form
            className="flex justify-between bg-white w-96 h-12"
            onSubmit={handleSubmit}
          >
            <aside
              style={{ background: selectColor }}
              className="h-8 w-12 m-2 bg-black"
            ></aside>
            <div className="flex ">
              <input
                type="text"
                value={selectColor}
                style={{ outlineColor: selectColor }}
                placeholder="#f15025"
                className="w-60 placeholder:text-xl text-xl px-4"
                onChange={handleChange}
              />
              <button
                type="submit"
                style={{ background: selectColor }}
                className="bg-blue-700 rounded-r w-20 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Display List of Colors  */}
      <section className="flex flex-wrap">
        {state.colorList.map((color, index) => {
          return (
            <>
              <SingleColor
                {...color}
                index={index}
                hex={color.hex}
                closeModal={closeModal}
                handleCopied={handleCopied}
                              />
            </>
          );
        })}
      </section>
    </>
  );
};

export default App;
