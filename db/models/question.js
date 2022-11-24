

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Topic,{
        foreignKey:'topic_id'
      })
    }
  }
  
  Question.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};