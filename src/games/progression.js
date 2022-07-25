import getRandomNumber from '../utils.js';
import startGameEngine from '../index.js';

const RulesGames = 'What number is missing in the progression?';

const getProgression = (length, startNumber, step) => {
  let nextNumber = startNumber;
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(nextNumber);
    nextNumber += step;
  }

  return progression;
};
const hideNumberInProgression = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = '..';

  return hiddenProgression;
};

const getQuestionCorrectAnswer = () => {
  const lengthProgression = getRandomNumber(5, 15);
  const startNumberProgression = getRandomNumber(5, 20);
  const stepProgression = getRandomNumber(2, 5);
  const indexNumberInProgression = getRandomNumber(0, lengthProgression - 1);
  const progression = getProgression(lengthProgression, startNumberProgression, stepProgression);
  const hidenNumber = hideNumberInProgression(progression, indexNumberInProgression);

  const question = hidenNumber.join(' ');
  const CorrectAnswer = progression[indexNumberInProgression].toString();
  return [question, CorrectAnswer];
};

export default () => startGameEngine(RulesGames, getQuestionCorrectAnswer);
