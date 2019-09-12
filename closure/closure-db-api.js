function init() {
  let db;
  function create(element) {
    db.push(element);
    return db.length;
  }
  const createdElement = create;
  return createdElement;
}
