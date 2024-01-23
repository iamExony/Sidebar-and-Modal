const arrayOfObjects = [
  { id: 1, name: 'Object 1', nestedObject: { key: 'value1' } },
  { id: 2, name: 'Object 2', nestedObject: { key: 'value2' } },
  { id: 3, name: 'Object 3', nestedObject: { key: 'value3' } },
];

const mappedArray = arrayOfObjects.map((currentObject) => {
  // Mapping over the array and returning a new object with modified properties
  return {
    same: currentObject.id,
    name: currentObject.name,

    // Mapping over the entries of the nested object
    nestedObject: Object.entries(currentObject.nestedObject).map(([key, value]) => ({
      key,
      value,
    })),
  };
});

console.log(mappedArray);