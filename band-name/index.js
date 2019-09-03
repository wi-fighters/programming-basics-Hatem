
function generateBandName(clothingColour, lastFoodEaten) {
  const firstInitialUpperCase = clothingColour[0].toUpperCase();
  const secondInitialUpperCase = lastFoodEaten[0].toUpperCase();
  const bandName = `The ${firstInitialUpperCase}${clothingColour
  return `The ${firstInitialUpperCase}${clothingColour
    .substring(1)
    .toLowerCase()} ${secondInitialUpperCase}${lastFoodEaten
    .substring(1)
    .toLowerCase()}!`;
  
}
console.log(generateBandName("wHite", "chiliCONcarne"));
