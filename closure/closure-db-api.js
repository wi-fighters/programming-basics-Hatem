const init = () => {
  let db = [];
  let api = [];
  const create = element => {
    db.push(element);
    return `Create Phase: \n New element added! The new length of the array is ${db.length}. \n -------------------------`;
  };
  const read = () => {
    let copiedArray = [...db];
    return ` Read Phase: \n ${copiedArray} \n ----------------------`;
  };
  const update = (index, newElement) => {
    if (db[index]) {
      console.log(
        `Update Phase: \n This index has an element \n now I will update the array\n---------------`
      );
      return (db[index] = newElement);
    } else {
      console.log(
        `Update Phase: \n This index is new \n now I will create new element \n-------------`
      );
      return create(newElement);
    }
  };
  const remove = index => {
    if (db[index]) {
      console.log(
        `Delete Phase: \n I want to delete the element inside this index: ${index}`
      );
      return db.splice(index, 1);
    } else {
      return "There is no index to delete the element inside it.";
    }
  };
  api.push(create, read, update, remove);
  return api;
};
const createInDb = init();
console.log(createInDb[0]("Hatem"));
console.log(createInDb[0]("Lubna"));
console.log(createInDb[0]("Adeeb"));
console.log(createInDb[1]());
console.log(
  "I can't update the array because I am in the read phase \n" +
    createInDb[1]("new element")
);
console.log(createInDb[2](0, "Adam"));
console.log(createInDb[1]());
console.log(createInDb[2](3, "Hatem"));
console.log(createInDb[1]());
console.log(createInDb[3](0));
console.log("-------------\n" + createInDb[1]());
