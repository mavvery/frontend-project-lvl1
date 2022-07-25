import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const RulesGames = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const getQuestionCorrectAnswer = () => {
  const number1 = getRandomNumber(1, 50);
  const number2 = getRandomNumber(1, 50);
  const question = `${number1} ${number2}`;

  const CorrectAnswer = String(gcd(number1, number2));
  return [question, CorrectAnswer];
};

export default () => startGameEngine(RulesGames, getQuestionCorrectAnswer);
