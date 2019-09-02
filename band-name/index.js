function generateBandName(clothingColour, lastFoodEaten) {
  const bandName = `${capitalizeColor(clothingColour)}${capitalizeFood(
    lastFoodEaten
  )} `;

  return bandName;
}
function capitalizeColor(clothingColour) {
  const firstInitialUpperCase = clothingColour[0].toUpperCase();
  const newColourString = `The ${firstInitialUpperCase}${clothingColour
    .substring(1)
    .toLowerCase()}`;
  return newColourString;
}
function capitalizeFood(lastFoodEaten) {
  const secondInitialUpperCase = lastFoodEaten[0].toUpperCase();
  const newFoodString = ` ${secondInitialUpperCase}${lastFoodEaten
    .substring(1)
    .toLowerCase()}!`;
  return newFoodString;
}
const globalArr = generateBandName("wHite", "chiliCONcarne");
console.log(globalArr);
