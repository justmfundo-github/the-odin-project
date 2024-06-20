// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.cssText = "color: red";
paragraph.textContent = "Hi, I'm red!!";

container.appendChild(paragraph);

const h3Node = document.createElement("h3");
h3Node.style.cssText = "color: blue";
h3Node.textContent = "Hi, I'm a blue h3!!";

container.appendChild(h3Node);

const pinkDiv = document.createElement("div");
pinkDiv.style.cssText = "background-color: pink; border-style: solid; border-color: black;";

const h1InDiv = document.createElement("h1");
h1InDiv.textContent = "I'm in a div";

const pInDiv = document.createElement("p");
pInDiv.textContent = "ME TOO";

pinkDiv.appendChild(h1InDiv);
pinkDiv.appendChild(pInDiv);

container.appendChild(pinkDiv);

const container2 = document.querySelector("#container-2");
container2.style.cssText = "padding: 30px; background-color: lightgray;";

const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World from the onClick javascript button");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  alert("Hello from the event listener button");
});

function alertFunction() {
  alert("YAY!!! YOU DID IT");
}

const btnFunc2 = document.querySelector("#btnFunc2");
// btnFunc2.onclick = () => alert("YAY FROM THE ONCLICK METHOD CALL");
btnFunc2.onclick = alertFunction; // calling to a function

const btnFunc3 = document.querySelector("#btnFunc3");
btnFunc3.addEventListener("click", alertFunction);

const btnFunc4 = document.querySelector("#btnFunc4");
btnFunc4.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
