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

quizRouter.get('/questions/:id', async (req, res) => {
  const ident = (req.params.id)

  const topic = await Topic.findByPk(ident);
  const questions = await Question.findAll({where:{topic_id:ident}});
  res.renderComponent(QuizPage, {
    topic,questions
  });

});


quizRouter.post('/answer-check', async (req, res) => {
  const {id, userAnswer} = req.body

  const question = await Question.findByPk(id);
  const {answer} = question
  const isRight = answer.toLowerCase() === userAnswer.toLowerCase()
  console.log({id1:answer.toLowerCase(), id2:userAnswer.toLowerCase(), bool:answer.toLowerCase() === userAnswer.toLowerCase()});
  res.json({isRight, answer})
});


module.exports = quizRouter;
