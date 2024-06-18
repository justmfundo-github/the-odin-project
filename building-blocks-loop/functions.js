const output = document.querySelector(".output");
// const para = document.createElement("p");

let i = 10;

while (i >= 0) {
  const para = document.createElement("p");
  para.textContent = i;

  output.appendChild(para);
  if (i == 0) {
    para.textContent = "Blast off!!!";
  }

  i--;
}
