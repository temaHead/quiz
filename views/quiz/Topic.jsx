const React = require('react');

function Topic({ topic }) {
  return (
    <div className='topic-card' data-id={`${topic.id}`}>
      <p>{topic.topic_name}</p>
      <button className = 'topic-button' type='button'>Перейти</button>
    </div>
  );
}
module.exports = Topic;
