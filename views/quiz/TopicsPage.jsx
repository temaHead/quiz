const React = require('react');
const Layout = require('../Layout');
const Topic = require('./Topic');

function TopicsPage({ topics }) {
  return (
    <Layout title='Quiz game'>
      <div id='topics'>
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
      {/* <script src='/js/quiz.js defer' /> */}
    </Layout>
  );
}

module.exports = TopicsPage;
