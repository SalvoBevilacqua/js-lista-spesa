const title = "Lista della spesa con ciclo while";

document.querySelector("h1").innerHTML = title;

const myArray = ["mele", "pane", "tovaglioli", "farina"];
console.log(myArray);

let i = 0;
let stringForHtml = "";

while (i < myArray.length) {
    stringForHtml += `<li><span>${myArray[i]}</span></li>`;
    i++;
}

document.querySelector("ul").innerHTML = stringForHtml;