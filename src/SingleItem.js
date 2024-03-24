import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SingleItem = ({ id, item, deleteItem, editItem, isEditing }) => {
  const [isChecked, setIsChecked] = useState(false); //state for checkbox

  //handle Checked Event
  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="flex gap-2 items-center" key={id}>
        <input type="checkbox" onChange={handleChecked} />
        <h1 className={`${isChecked ? "line-through" : "no-underline"}`}>
          {item}
        </h1>
      </div>

      {/* Buttons Section */}
      <div className="flex">
        <button
          onClick={() => editItem(id)}
          disabled={isEditing}
          className={`text-green-500 ${isEditing ? "pointer-events-none" : ""}`}
        >
          <FaRegEdit />
        </button>
        <button
          onClick={() => deleteItem(id)}
          disabled={isEditing}
          className={`text-red-500 ${isEditing ? "pointer-events-none" : ""}`}
        >
          <MdDelete />
        </button>
      </div>
    </>
  );
};

export default SingleItem;
