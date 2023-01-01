const attributeTypes = {
  text: "text",
  swatch: "swatch",
};

const attributeNames = {
  size: "Size",
  color: "Color",
  capacity: "Capacity",
};

const sizesList = {
  XS: "Extra Small",
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "Extra Large",
};

const colorsList = {
  Green: "#44FF03",
  Cyan: "#03FFF7",
  Blue: "#030BFF",
  Black: "#000000",
  White: "#FFFFFF",
  Graphite: "#4C4A46",
  Silver: "#F1F2ED",
  Gold: "#FEEDD8",
  Pacific: "#2E4755",
  MidnightBlack: "#00040D",
  CosmicRed: "#74344E",
  NovaPink: "#FA1A8E",
  StarLighBlue: "#23BDDB",
  ShockBlue: "#5377B7",
};

const shoeSize = (...arguments) => {
  const items = Object.values(arguments).map((item) => ({
    displayValue: item,
    value: item,
    id: item,
  }));

  const result = {
    id: attributeNames.size,
    name: attributeNames.size,
    type: attributeTypes.text,
    items,
  };

  return result;
};

const clotheSize = (...arguments) => {

  const items = Object.values(arguments).map((item) => ({
    displayValue: sizesList[item],
    value: item,
    id: sizesList[item],
  }));

  const result = {
    id: attributeNames.size,
    name: attributeNames.size,
    type: attributeTypes.text,
    items,
  };

  return result;
};

const colors = (...arguments) => {
  const items = Object.values(arguments).map((item) => ({
    displayValue: item,
    value: colorsList[item],
    id: item,
  }));

  const result = {
    id: attributeNames.color,
    name: attributeNames.color,
    type: attributeTypes.swatch,
    items,
  };

  return result;
};

const capacity = (...arguments) => {
  const items = Object.values(arguments).map((item) => ({
    displayValue: item,
    value: item,
    id: item,
  }));

  const result = {
    id: attributeNames.capacity,
    name: attributeNames.capacity,
    type: attributeTypes.text,
    items,
  };
  return result;
};

const otherOption = (option) => {
  const yesNo = [
    {
      displayValue: "Yes",
      value: "Yes",
      id: "Yes",
    },
    {
      displayValue: "No",
      value: "No",
      id: "No",
    },
  ];

  const result = {
    id: option,
    name: option,
    type: attributeTypes.text,
    items: yesNo,
  };

  return result;
};
module.exports = { shoeSize, clotheSize, colors, capacity, otherOption };
