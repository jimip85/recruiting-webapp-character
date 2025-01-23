import React, { useState } from "react";
import { CLASS_LIST } from "./consts";

const ClassesCard = ({
  attributeStateMap,
  selectedClass,
  setSelectedClass,
}) => {
  const isMininmumMet = (classAttributeMinimums): boolean => {
    for (const [key, value] of Object.entries(classAttributeMinimums)) {
      console.log(key, value, attributeStateMap[key]);
      if (attributeStateMap[key] < value) {
        return false;
      }
    }

    return true;
  };

  const textColor = (className) =>
    isMininmumMet(CLASS_LIST[className]) ? "green" : "white";

  const handleSelectClass = (className) => {
    console.log(className);
    setSelectedClass(className);
  };

  const resetSelectedClass = () => {
    setSelectedClass(undefined);
  };

  return (
    <div>
      <h1>ClassesCard:</h1>
      <div>
        {Object.keys(CLASS_LIST).map((className) => (
          <div key={className} onClick={() => handleSelectClass(className)}>
            <h2
              style={{
                color: `${textColor(className)}`,
              }}
            >
              {className}
            </h2>
          </div>
        ))}
      </div>
      <div>
        <h1>Selected Class:</h1>
        {selectedClass !== undefined ? (
          <div>
            {Object.entries(CLASS_LIST[selectedClass]).map(([attribute]) => (
              <div key={attribute}>
                {attribute}: {CLASS_LIST[selectedClass][attribute]}
              </div>
            ))}
            <div onClick={resetSelectedClass}>Close</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ClassesCard;
