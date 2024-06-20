const url = "https://riddles-api-eight.vercel.app/logic";
const container = document.querySelector(".container");
const section = document.querySelector(".section");
const questionSection = document.querySelector(".question");
const answerSection = document.querySelector(".answer");
const answerSectionh2 = document.querySelector(".answer h2");
const show = document.getElementById("answer");
const next = document.getElementById("next");
var answerArray = [];

async function serverResponse(){
    const response = await fetch(url);
    const result = await response.json();
    answerArray.push({
        riddle : result.riddle,
        answer : result.answer
    })

    questionSection.innerHTML = `<h2>${answerArray[0].riddle}</h2>`

    show.addEventListener("click", function(){
        container.style.height = "600px";
        section.style.height = "400px";
        questionSection.classList.add("remove-top");
        answerSection.classList.add("roll");
        answerSectionh2.classList.add("roll");
        answerSection.innerHTML = `<h2>${answerArray[0].answer}</h2>`
        answerSection.scrollIntoView(true)
    })

    next.addEventListener("click", function(){
        container.style.height = "400px";
        section.style.height = "240px";
        questionSection.classList.remove("remove-top");
        answerSection.classList.remove("roll");
        answerSectionh2.classList.remove("roll");
        window.location.reload();
    })
}

serverResponse();
