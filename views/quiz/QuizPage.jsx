const React = require('react');
const Layout =  require('../Layout')

function QuizPage({ topic, questions }) {
  return (
    <Layout title='questions'>
    <div className='quiz-card'>
        <h2>{topic.topic_name}</h2>
        {questions.map((question)=> 

        <form className='form-inp'  type='submit'>
        
            <p className= 'questionPar' data-questionid ={question.id} >{question.question}</p>
        
          <input className='answer-inp' type="sumbit" placeholder='введите ответ' /> 
        
        <button className = 'topic-button' type='submit'>Проверить ответ</button>
        
        </form>  
        )}

    </div>
    <script src='/quiz.js' defer />
    </Layout>
  );
}
module.exports = QuizPage;
