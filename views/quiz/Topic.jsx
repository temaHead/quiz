const React = require('react');

function Topic({ topic }) {
  return (
    <div className='topic-card' data-id={`${topic.id}`}>
      <p>{topic.topic_name}</p>
      <a href={`quiz/questions/${topic.id}`}>Перейти</a>
    </div>
  );
}
module.exports = Topic;
