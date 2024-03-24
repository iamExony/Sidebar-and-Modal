import React from "react";
import SingleItem from "./SingleItem";

const GroceryItem = ({ singleItems, deleteItem, editItem, isEditing }) => {
  return (
    <>
      {singleItems.map((items) => {
        return (
          <div className="flex items-center justify-between w-[24rem]">
            <SingleItem
              {...items}
              deleteItem={deleteItem}
              editItem={editItem}
              isEditing={isEditing}
            />
          </div>
        );
      })}
    </>
  );
};

export default GroceryItem;
