document.querySelector('#topics').addEventListener('click',async (event)=>{
if(event.target.classList.contains('topic-button'))
{
    event.preventDefault()
    const topicCard = event.target.closest('.topic-card')
    const response = await fetch('quiz/quiz-page',{
        method:'post',
        body:JSON.stringify({id:topicCard.dataset.id}),
        headers:{'Content-Type':'application/json'}
    })
    console.log(response)
}}
);
