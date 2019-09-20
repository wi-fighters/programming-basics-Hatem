let column = "";
for (let i = 0; i < 4; i++) {
  column = "";
  for (j = 0; j < 5; j++) {
    column += "|";
  }
  console.log(column);
}

let stars = "";

for (let i = 0; i < 4; i++) {
  stars = "";
  for (j = 0; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

let serial = "";

for (let i = 0; i < 3; i++) {
  serial = "";
  for (j = 0; j < 5; j++) {
    if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
      serial += "-";
    } else if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
      serial += "|";
    }
  }

  console.log(serial);
}
