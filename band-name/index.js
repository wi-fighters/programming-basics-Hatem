function bandNameFunction(clothingColor, lastFoodEaten) {
  const firstInitial = clothingColor[0];
  const secondInitial = lastFoodEaten[0];
  const firstInitialUpperCase = firstInitial.toUpperCase();
  const secondInitialUpperCase = secondInitial.toUpperCase();
  const bandName = `The ${firstInitialUpperCase}${clothingColor.substring(
    1
  )} ${secondInitialUpperCase}${lastFoodEaten.substring(1)}!`;

  return bandName;
}
const globalArr = bandNameFunction("white", "chiliconcarne"); // store the function in a global array.
console.log(globalArr);
