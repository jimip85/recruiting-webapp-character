export const computeModifier = (attributeValue) => {
    const distance = attributeValue - 10;
    return distance > 0 ? Math.ceil(distance / 2) : Math.floor(distance / 2);
  };