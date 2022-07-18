import readlineSync from 'readline-sync';

const questionsCount = 3;

const startGameEngine = (RulesGames, getQuestionCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(RulesGames);

  for (let i = 0; i < questionsCount; i += 1) {
    const [question, CorrectAnswer] = getQuestionCorrectAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (CorrectAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${CorrectAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGameEngine;
