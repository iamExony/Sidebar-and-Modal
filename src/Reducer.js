//reducer

export const reducer = (state, action) => {
  if (action.type === "COLOR_ADDED") {
    return {
      ...state,
      colorList: action.payload,
      isModalOpen: false,
      modalContent: "",
    };
  }
  if (action.type === "COPIED") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Color Copied!",
    };
  }
  if (action.type === "INVALID_COLOR") {
    return {
      ...state,
      isModalOpen: true,
      outlineColor: "red-600",
      modalContent: action.payload,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
};
