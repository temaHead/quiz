const {Topic, Question} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const topic1 = await Topic.create({
      theme_name:'Тема'
    })
    Question.bulkCreate([{
      question:'Бесит блять пиздец сука',
      answer:'Бесит блять пиздец сука',
      topic_id:topic1.id
    },
    {
      question:'Бесит блять пиздец сука',
      answer:'Бесит блять пиздец сука',
      topic_id:topic1.id
    },
    {
      question:'Бесит блять пиздец сука',
      answer:'Бесит блять пиздец сука',
      topic_id:topic1.id
    },
    {
      question:'Бесит блять пиздец сука',
      answer:'Бесит блять пиздец сука',
      topic_id:topic1.id
    },
    {
      question:'Бесит блять пиздец сука',
      answer:'Бесит блять пиздец сука',
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
