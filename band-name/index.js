function generateBandName(clothingColor, lastFoodEaten) {
  let bandName = "";
  const colorInitial = clothingColor[0].toUpperCase();
  const colorRest = clothingColor.substr(1).toLowerCase();
  const color = colorInitial.concat(colorRest);
  const foodInitial = lastFoodEaten[0].toUpperCase();
  const foodRest = lastFoodEaten.substr(1).toLowerCase();
  const food = foodInitial.concat(foodRest);
  bandName = `The ${makeTasty(color)} ${food}!`;
  return bandName;
}
function makeTasty(color) {
  switch (color) {
    case "Red":
      return "Chilli";
      break;
    case "Orange":
      return "Tangerine";
      break;
    case "Yellow":
      return "Pineapple";
      break;
    case "Green":
      return "Sage";
      break;
    case "Blue":
      return "Blueberry";
      break;
    case "Purple":
      return "Plum";
      break;
    default:
      return color;
  }
}
console.log(generateBandName("black", "spAGhetti"));
