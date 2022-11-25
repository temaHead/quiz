const quizRouter = require('express').Router();

// подключаем модель топика
const { Topic, Question } = require('../db/models');

// подключаем вьюху топика
const TopicsPage = require('../views/quiz/TopicsPage');
const QuizPage = require('../views/quiz/QuizPage');



quizRouter.get('/', async (req, res) => {
  // находим все топики в БД
  const topics = await Topic.findAll(req.body.id);
  res.renderComponent(TopicsPage, {
    topics,
  });
});

quizRouter.post('/quiz-page', async (req, res) => {
  const id = Number(req.body.id)
  const topic = await Topic.findByPk(id);
  const questions = await Question.findAll({where:{topic_id:topic.id}});

  res.renderComponent(QuizPage, {
    topic,questions
  });
});

module.exports = quizRouter;
