
const globalArr = [];

function generateBandName(clothingColour, lastFoodEaten) {
  let bandName = "";
  const firstInitialUpperCase = clothingColour[0].toUpperCase();
  const secondInitialUpperCase = lastFoodEaten[0].toUpperCase();
  bandName = `The ${firstInitialUpperCase}${clothingColour
    .substring(1)
    .toLowerCase()} ${secondInitialUpperCase}${lastFoodEaten
    .substring(1)
    .toLowerCase()}!`;
  globalArr.push(bandName);

  return bandName;
}

console.log(generateBandName("whitE", "burger"));



