const quizRouter = require('express').Router();

// подключаем модель топика
const { Topic } = require('../db/models');

// подключаем вьюху топика
const TopicView = require('../views/quiz/Topic');

quizRouter.get('/', async (req, res) => {
  // находим все топики в БД
  const tipic = await Topic.findAll({
    // сортируем
    order: [['createdAt', 'DESC']],
  });
  res.renderComponent(TopicView, {
    topic,
  });
});

module.exports = quizRouter;
