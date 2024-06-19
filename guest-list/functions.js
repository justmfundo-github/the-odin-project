const people = ["Mark", "Perry", "Phil", "Mary", "Delila", "Donna", "Lola", "Leila", "Sandy", "Lerato", "Mapule"];
let guestsToAdmit = "";
let guestsToRefuse = "";
for (const person of people) {
  if (person == "Phil" || person == "Lola") {
    guestsToAdmit += " " + person;
  } else {
    guestsToRefuse += " " + person;
  }
}

console.log(guestsToAdmit);
console.log(guestsToRefuse);

const output = document.querySelector(".output");
console.log(output);
const toAdmitpara = document.createElement("p");
const toRefusepara = document.createElement("p");

// console.log(para);
toAdmitpara.textContent += "Guests to admit: " + guestsToAdmit;
toRefusepara.textContent += "Guests to admit: " + guestsToRefuse;
output.appendChild(toAdmitpara);
output.appendChild(toRefusepara);
