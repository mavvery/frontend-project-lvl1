import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const RulesGames = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const getQuestionCorrectAnswer = () => {
  const question = getRandomNumber(1, 100);
  const CorrectAnswer = isEven(question) ? 'yes' : 'no';

  return [question, CorrectAnswer];
};
export default () => startGameEngine(RulesGames, getQuestionCorrectAnswer);
