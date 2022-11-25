// document.querySelector('.form-inp').addEventListener('submit',async (event)=>{
//     event.preventDefault()

//     console.log(event.target.imp.value)
// })

document.querySelector('.quiz-card').addEventListener('click',async (event)=>{
    event.preventDefault()
    if(event.target.classList.contains('topic-button')){
        const questionBox =  event.target.closest('.form-inp');
        const input = questionBox.querySelector('.answer-inp');
        const par = questionBox.querySelector('.questionPar');

        const response = await fetch('/quiz/answer-check',{
            method:'post',
            body: JSON.stringify({id:par.dataset.questionid, userAnswer:input.value}),
            headers:{'Content-Type':'application/json'},
        })
        const data = await response.json()
        par.innerText =- par.innerText + data.isRight ? ' Верно!' :` Неверно! Правильный ответ: ${data.answer}`
    }

})