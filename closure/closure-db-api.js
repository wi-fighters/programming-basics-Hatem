const init = () => {
  let db = [];
  let api = [];
  const create = element => {
    db.push(element);
    // console.log("contents of db:");
    // console.log(db);
    return `New element added! The new length of the array is ${db.length}.`;
  };
  const read = () => {
    let copiedArray = [...db];
    return copiedArray;
  };
  const update = (index, newElement) => {
    if (db[index]) {
      return (db[index] = newElement);
    } else {
      return create(newElement);
    }
  };
  api.push(create, read, update);
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
console.log(createInDb[2](0, "hi i am a new element"));
console.log(createInDb[1]());
console.log(createInDb[2](11, "hi i am a new element"));
console.log(createInDb[1]());
