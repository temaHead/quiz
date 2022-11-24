require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');
const mainRouter = require('./routes/main.routes');
const quizRouter = require('./routes/quiz.routes');

const app = express();

expressConfig(app);

// подключаем маршрутизацию
app.use(mainRouter);
app.use('/quiz', quizRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
