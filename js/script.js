// let questionElements = document.querySelectorAll(".question")

// for (let index = 0; index < questionElements.length; index++) {
//     const question = questionElements[index];
//     question.addEventListener('click', toggleClassActive)
// }

// console.log('query all .question', document.querySelectorAll(".question"))
// console.log('file js loaded')


let questionElements = document.getElementsByClassName("question");

for (let index = 0; index < questionElements.length; index++) {
    const question = questionElements[index];
    question.addEventListener('click', () => question.classList.toggle('active'))
}

// console.log('query all .question', document.querySelectorAll(".question"))
// console.log('file js loaded')






// document.querySelectorAll(".question").forEach((question) => question.addEventListener("click", () =>{
    
//     if(question.parentNode.classList.contains("active")) {
//         question.parentNode.classList.toggle("active")
//     }
//     else {
//         document.querySelectorAll(".question").forEach(question => question.parentNode.classList.remove("active"))

//         question.parentNode.classList.add("active")
//     }

// }))