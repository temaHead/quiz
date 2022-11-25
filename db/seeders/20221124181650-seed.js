const {Topic, Question} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topic1 = await Topic.create({
      topic_name:'Тема'
    })
    Question.bulkCreate([{
      question:'Зачем?',
      answer:'Затем',
      topic_id:topic1.id
    },
    {
      question:'Зачем?',
      answer:'Затем',
      topic_id:topic1.id
    },
    {
      question:'Зачем?',
      answer:'Затем',
      topic_id:topic1.id
    },
    {
      question:'Зачем?',
      answer:'Затем',
      topic_id:topic1.id
    },
    {
      question:'Зачем?',
      answer:'Затем',
      topic_id:topic1.id
    },
    
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
