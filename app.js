let contEle = document.querySelector(".container");

let text = ["Youtuber","Web Developer","Freelancer","Instructor"];

let textIndex = 0;
let characterIndex = 0;

update();

function update() {
    characterIndex++
    contEle.innerHTML =`
        <h1>I am ${text[textIndex].slice(0,1) === "I" ? "an" : "a"} ${text[textIndex].slice(0,characterIndex)}</h1>`;

        if (characterIndex === text[textIndex].length) {
            textIndex++
            characterIndex =0;
        }

        if (textIndex ===  text.length) {
            textIndex = 0;
        }

        setTimeout(update, 500);
}