import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const RulesGames = 'What is the result of the expression?';

const calc = (num1, num2, operator) => {
  if (operator === '+') {
    return num1 + num2;
  } if (operator === '-') {
    return num1 - num2;
  } return num1 * num2;
};

const getQuestionCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, 3)];

  const question = `${number1} ${operator} ${number2}`;
  const CorrectAnswer = String(calc(number1, number2, operator));

  return [question, CorrectAnswer];
};
export default () => startGameEngine(RulesGames, getQuestionCorrectAnswer);
