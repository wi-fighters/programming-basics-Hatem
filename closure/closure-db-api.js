function init() {
  let db = [];
  function create(element) {
    db.push(element);
    return db.length;
  }
  return create;
}
const createInDb = init();
console.log(createInDb("Hatem"));
console.log(createInDb("Lubna"));
console.log(createInDb("Adeeb"));
