import React from "react";
import { ATTRIBUTE_LIST } from "./consts";
import { computeModifier } from "./util";

const AttributesCard = ({
  attributeStateMap,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div>
      Attributes:
      {ATTRIBUTE_LIST.map((attribute) => (
        <div>
          {attribute}:{attributeStateMap[attribute]}, Modifier:
          {computeModifier(attributeStateMap[attribute])}
          <button
            onClick={() => {
              handleIncrement(attribute);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              handleDecrement(attribute);
            }}
          >
            -
          </button>
        </div>
      ))}
    </div>
  );
};

export default AttributesCard;
