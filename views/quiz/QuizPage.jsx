const React = require('react');

function QuizPage({ topic, questions }) {
  return (
    <div className='quiz-card'>
        <h2>{topic.topic_name}</h2>
      <p>{topic.topic_name}</p>
      <p>{questions[0].question}</p>
      <button className = 'topic-button' type='button'>Перейти</button>
    </div>
  );
}
module.exports = QuizPage;
