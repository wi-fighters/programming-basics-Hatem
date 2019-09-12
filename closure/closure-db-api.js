const init = () => {
  let db = [];
  let api = [];
  const create = element => {
    db.push(element);
    console.log("contents of db:");
    console.log(db);
    return db.length;
  };
  api.push(create);
  console.log("contents of api:");
  console.log(api);
  return api;
};
const createInDb = init();
const myElement = createInDb[0];
console.log(myElement("Hatem"));
console.log(createInDb[0]("Lubna"));
console.log(createInDb[0]("Adeeb"));
