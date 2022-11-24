const React = require('react');

function Topic({ topic }) {
  return (
    <div className='topic-card'>
      <a href={`/quiz/view-quiz/${topic.id}`}>${topic.topic_name}</a>
    </div>
  );
}
module.exports = Topic;
