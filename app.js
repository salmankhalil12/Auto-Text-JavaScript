// let contEle = document.querySelector(".container");
// let text = ["Youtuber","Web Developer","Freelancer","Instructor"];
// let textIndex = 0;
// let characterIndex = 0;
// update();

// function update() {
//     characterIndex++
//     contEle.innerHTML =`
//         <h1>I am ${text[textIndex].slice(0,1) === "I" ? "an" : "a"} ${text[textIndex].slice(0,characterIndex)}</h1>`;

//         if (characterIndex === text[textIndex].length) {
//             textIndex++
//             characterIndex =0;
//         }

//         if (textIndex ===  text.length) {
//             textIndex = 0;
//         }

//         setTimeout(update, 500);
// }

let contEle = document.querySelector(".container")
let text = ["red","green","blue","orange","yellow","pink","brown","perpal"];

let textIndex =0;
let addText = 0;
contEle.style.color = text[textIndex]
updateColor();


function updateColor() {
    addText++;
    document.body.style.backgroundColor = text[textIndex]
    contEle.innerHTML = `
    <h1>This Color is ${text[textIndex].slice(0,addText)};
    `
    if (text[textIndex] === "red" || text[textIndex === "brown"]) {
        contEle.style.color="white";
    }
    if (addText === text[textIndex].length) {
        textIndex++
        addText =0
    }
    
  
