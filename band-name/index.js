
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

function capitalizeInitial(rawString) {
  const firstInitialUpperCase = rawString[0].toUpperCase();
  const bandName = `${firstInitialUpperCase}${rawString
    .substring(1)
    .toLowerCase()}`;
  return bandName;
}
console.log(capitalizeInitial("WhIte"), capitalizeInitial("ChiliConcarne"));


