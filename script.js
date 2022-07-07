const hexvalues = [0, 1, 2, 3, 4, "A", "B", "C"];
const hexvalues2 = [5, 6, 7, 8, 9, "D", "E", "F"];
let randomColorUp = () => {
  let hex = "#";
  for(let i = 0; i < 6; i++){
    let randomIndex = Math.floor(hexvalues.length * Math.random());
    rendomValue = hexvalues[randomIndex];
    hex += rendomValue;
  }
  return hex;
}
randomColorUp();

let randButton = document.getElementById('randomColorUp');
randButton.onclick = () => {
  document.body.style.backgroundColor = randomColorUp();
};

let randomColorDown = () => {
  let hex2 = "#";
  for(let i = 0; i < 6; i++){
    let randomIndex = Math.floor(hexvalues2.length * Math.random());
    rendomValue2 = hexvalues2[randomIndex];
    hex2 += rendomValue2;
  }
  return hex2;
}
randomColorDown();

let randButton2 = document.getElementById('randomColorDown');
randButton2.onclick = () => {
  document.body.style.backgroundColor = randomColorDown();
};