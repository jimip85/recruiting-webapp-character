import React, { useState } from "react";
import { SKILL_LIST } from "./consts";
import { computeModifier } from "./util";

const SkillsCard = ({ attributeStateMap, skillStateMap, setSkillStateMap }) => {
  const totalAmountOfPointsToSpend = () => {
    const intelligenceModifier = computeModifier(
      attributeStateMap["Intelligence"]
    );
    const totalPoints = 10 + 4 * intelligenceModifier;

    return totalPoints < 0 ? 0 : totalPoints;
  };

  const [pointsBalance, setPointsBalance] = useState<number>(0);

  const handleIncrement = (skill: string) => {
    setSkillStateMap({
      ...skillStateMap,
      [skill]: skillStateMap[skill] + 1,
    });
    setPointsBalance(pointsBalance + 1);
  };

  const handleDecrement = (skill: string) => {
    if (skillStateMap[skill] > 0) {
      setSkillStateMap({
        ...skillStateMap,
        [skill]: skillStateMap[skill] - 1,
      });
      setPointsBalance(pointsBalance - 1);
    }
  };

  return (
    <div>
      <h1>Skills:</h1>
      <p>
        Total Points to Spend: {totalAmountOfPointsToSpend() - pointsBalance}
      </p>
      <div>
        {SKILL_LIST.map((skill) => (
          <div>
            {skill["name"]} : {skillStateMap[skill["name"]]}
            <button onClick={() => handleIncrement(skill["name"])}>+</button>
            <button onClick={() => handleDecrement(skill["name"])}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
