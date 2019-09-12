const init = () => {
  let db = [];
  let api = [];
  const create = element => {
    db.push(element);
    // console.log("contents of db:");
    // console.log(db);
    return db.length;
  };
  const read = () => {
    let copiedArray = [...db];
    return copiedArray;
  };
  api.push(create, read);
  //   console.log("contents of api:");
  //   console.log(api);
  return api;
};
const createInDb = init();
console.log(createInDb[0]("Hatem"));
console.log(createInDb[0]("Lubna"));
console.log(createInDb[0]("Adeeb"));
console.log(createInDb[1]());
console.log(createInDb[1]("new value")); // trying to push element to the db from outside the init function and i can not because i am just reading the array not to change with it.
