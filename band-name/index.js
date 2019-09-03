function capitalizeInitial(rawString) {
  const firstInitialUpperCase = rawString[0].toUpperCase();
  const bandName = `${firstInitialUpperCase}${rawString
    .substring(1)
    .toLowerCase()}`;
  return bandName;
}
console.log(capitalizeInitial("WhIte"), capitalizeInitial("ChiliConcarne"));