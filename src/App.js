import React, { useEffect, useReducer } from "react";
import GroceryItem from "./GroceryItem";
import Modal from "./Modal";
import { MdGppGood } from "react-icons/md";
import { RiAlarmWarningFill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { GrStatusGood } from "react-icons/gr";
import { HiFire } from "react-icons/hi";

//<MdGppGood />
//<RiAlarmWarningFill />
//<CiEdit />
//<GrStatusGood />
//<HiFire />;

//LocalStorage setup
const getLocalStorage = () => {
  const list = localStorage.getItem("Items");
  if(list){
    return JSON.parse(localStorage.getItem("Items"));
  }else{
    return []
  }
}

//colors
const greenColor = "#15803d";
const redColor = "#ff0000"

//Reducer function
const reducer = (state, action) => {
  if (action.type === "ITEM_CHANGED") {
    const value = action.payload;
    return {
      ...state,
      enterItem: value,
    };
  } //action item_changed ends
  if (action.type === "EMPTY_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalColor: `${redColor}`,
      modalContent: (
        <>
          <div className="flex items-center justify-center gap-3">
            <RiAlarmWarningFill />
            <h1>Please Enter A Value</h1>
          </div>
        </>
      ),
    };
  } //action empty_value ends
  if (action.type === "ITEMS_CLEARED") {
    return {
      ...state,
      listItems: [],
      isModalOpen: true,
      modalColor: `${redColor}`,
      modalContent: (
        <>
          <div className="flex items-center justify-center gap-3">
            <GrStatusGood />
            <h1>Items Cleared</h1>
          </div>
        </>
      ),
    };
  } //action Items_cleared ends
  if (action.type === "ITEMS_DELETED") {
    const newListItem = state.listItems.filter(
      (items) => items.id !== action.payload
    );
    return {
      ...state,
      listItems: newListItem,
      isModalOpen: true,
      modalColor: `${redColor}`,
      modalContent: (
        <>
          <div className="flex items-center justify-center gap-3">
            <HiFire />
            <h1>Item Deleted</h1>
          </div>
        </>
      ),
    };
  } //action Items_deleted ends
  if (action.type === "IS_EDITING") {
    const updateEditItem = state.listItems.map((items) => {
      if (items.id === state.editID) {
        return { ...items, item: state.enterItem };
      }
      return items;
    });
    return {
      ...state,
      listItems: updateEditItem,
      isEditing: false,
      enterItem: "",
      isModalOpen: true,
      modalColor: `${greenColor}`,
      modalContent: (
        <>
          <div className="flex items-center justify-center gap-3">
            <CiEdit />
            <h1>Item Updated</h1>
          </div>
        </>
      ),
    };
  } //action Is_Editing ends
  if (action.type === "EDIT_ITEMS") {
    const editedItem = state.listItems.find(
      (items) => items.id === action.payload
    );
    return {
      ...state,
      enterItem: editedItem.item,
      isModalOpen: true,
      modalColor: `${greenColor}`,
      modalContent: (
        <>
          <div className="flex items-center justify-center gap-3">
            <GrStatusGood />
            <h1>Editing Item</h1>
          </div>
        </>
      ),
      isEditing: true,
      editID: action.payload,
    };
  } //action edited_items ends
  if (action.type === "ITEMS_UPDATED") {
    const updateItems = [
      ...state.listItems,
      { id: new Date().getTime().toString(), item: state.enterItem },
    ];
    return {
      ...state,
      listItems: updateItems,
      enterItem: "",
      isModalOpen: true,
      modalColor: `${greenColor}`,
      modalContent: (
        <>
          <div className="flex items-center justify-center">
            <MdGppGood />
            <h1>Item Added</h1>
          </div>
        </>
      ),
      isEditing: false,
    };
  } //action items_updated ends
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
      modalContent: "",
    };
  } //action close_modal ends
  return state;
};

//Default state
const defaultState = {
  enterItem: "",
  listItems: getLocalStorage(),
  isModalOpen: false,
  modalContent: "",
  modalColor: "",
  isEditing: false,
  editID: null,
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  //Handle input
  const handleChange = (e) => {
    dispatch({ type: "ITEM_CHANGED", payload: e.target.value });
  };
  //Handle Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const emptySpace = state.enterItem.trim();
    if (!state.enterItem || emptySpace === "") {
      dispatch({ type: "EMPTY_VALUE" });
    } else if (state.enterItem && state.isEditing) {
      dispatch({ type: "IS_EDITING" });
    } else {
      dispatch({ type: "ITEMS_UPDATED" });
    }
  };
  //Handle Clear All button
  const handleClearAll = () => {
    dispatch({ type: "ITEMS_CLEARED" });
  };

  //Handle Delete Item button
  const deleteItem = (selectedId) => {
    dispatch({ type: "ITEMS_DELETED", payload: selectedId });
  };

  //Handle Edit button
  const editItem = (selectedId) => {
    dispatch({ type: "EDIT_ITEMS", payload: selectedId });
  };

  //Close Modal
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(state.listItems))
  }, [state.listItems])
  return (
    <>
      <section className="w-full h-screen">
        {state.isModalOpen && (
          <Modal
            modalContent={state.modalContent}
            modalColor={state.modalColor}
            closeModal={closeModal}
            singleItems={state.listItems}
          />
        )}
        <div className="bg-white max-w-[32rem] mx-auto mt-36 shadow-md hover:shadow-lg rounded flex flex-col items-center justify-center gap-4 py-8">
          <h1 className="text-4xl">TODO LIST</h1>
          <h1 className="italic text-gray-300">
            What do you want to do today?
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              className="bg-[#f8fafc] outline-[#f1c40f] rounded-l-md w-72 h-8 px-4"
              value={state.enterItem}
              placeholder="eg. Learn to code"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-[#3498db] px-4 rounded-r-md h-8 text-white hover:bg-[#164e63]"
            >
              {state.isEditing ? "Edit" : "Add"}
            </button>
          </form>
          {state.listItems.length > 0 && (
            <>
              <div>
                <GroceryItem
                  singleItems={state.listItems}
                  deleteItem={deleteItem}
                  editItem={editItem}
                  isEditing={state.isEditing}
                />
              </div>
              {/* Clear All Item button */}
              <button
                className="text-red-500 hover:text-red-700"
                onClick={handleClearAll}
              >
                Clear All
              </button>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default App;
