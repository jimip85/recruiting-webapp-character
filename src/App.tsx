import { useState } from "react";
import "./App.css";
import AttributesCard from "./AttributesCard";
import ClassesCard from "./ClassesCard";
import SkillsCard from "./SkillsCard";
import { saveCharacter, fetchCharacter } from "./api";
import { Attributes, SkillPoints } from "./types";

const defaultSkills: SkillPoints = {
  Acrobatics: 0,
  "Animal Handling": 0,
  Arcana: 0,
  Athletics: 0,
  Deception: 0,
  History: 0,
  Insight: 0,
  Intimidation: 0,
  Investigation: 0,
  Medicine: 0,
  Nature: 0,
  Perception: 0,
  Performance: 0,
  Persuasion: 0,
  Religion: 0,
  "Sleight of Hand": 0,
  Stealth: 0,
  Survival: 0,
};

const defaultAttributes: Attributes = {
  Strength: 0,
  Dexterity: 0,
  Constitution: 0,
  Intelligence: 0,
  Wisdom: 0,
  Charisma: 0,
};

function App() {
  const [attributes, setAttributes] = useState(defaultAttributes);

  const [selectedClass, setSelectedClass] = useState<string>();

  const [skillStateMap, setSkillStateMap] =
    useState<SkillPoints>(defaultSkills);

  const computeTotalAttributePoints = () => {
    if (!attributes) {
      return 0;
    }

    return Object.values(attributes).reduce((acc, curr) => acc + curr, 0);
  };

  const handleIncrement = (attribute: string) => {
    if (computeTotalAttributePoints() < 70) {
      setAttributes((prevState) => ({
        ...prevState,
        [attribute]: prevState[attribute] + 1,
      }));
    }
  };

  const handleDecrement = (attribute: string) => {
    setAttributes((prevState) => ({
      ...prevState,
      [attribute]: prevState[attribute] > 0 ? prevState[attribute] - 1 : 0,
    }));
  };

  const handleSave = async () => {
    const character = {
      name: "Test",
      attributes: attributes,
      selectedClass: selectedClass,
      skillPoints: skillStateMap,
    };

    await saveCharacter(character);
  };

  const handleFetch = async () => {
    try {
      const character = await fetchCharacter();
      console.log("Character fetched successfully:", character);
      setAttributes(character.attributes);
      setSkillStateMap(character.skillPoints);
    } catch (error) {
      console.error("Error fetching character:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <AttributesCard
          attributeStateMap={attributes}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          totalAttributePoints={computeTotalAttributePoints()}
        />
        <ClassesCard
          attributeStateMap={attributes}
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
        />
        <SkillsCard
          attributeStateMap={attributes}
          skillStateMap={skillStateMap}
          setSkillStateMap={setSkillStateMap}
        />
      </section>
      <button onClick={() => handleSave()}>Save</button>
      <button onClick={() => handleFetch()}>Fetch</button>
    </div>
  );
}

export default App;
