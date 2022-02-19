const random = (repeat) => {
  let object = {};
  console.log(repeat);
  for (let i = 0; i < repeat; i++) {
    let number = Math.floor(Math.random() * 999) + 1;
    if (object[number]) {
      object[number]++;
    } else {
      object[number] = 1;
    }
  }
  return console.log(object);
};