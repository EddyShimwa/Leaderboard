import './styles.css';
import { onAddscore, render } from './modules/control-leaderboard.js';

const myData = [
  {
    id: 1,
    name: 'eddy',
    score: 100,
  },
  {
    id: 2,
    name: 'eddy',
    score: 80,
  },
  {
    id: 3,
    name: 'eddy',
    score: 70,
  },
  {
    id: 4,
    name: 'eddy',
    score: 400,
  },
  {
    id: 5,
    name: 'eddy',
    score: 15,
  },
];

//   the list of score
const scoreSection = document.querySelector('.scores-list');

//   adding the button to submit score
const addform = document.querySelector('#add-score');
addform.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  onAddscore({ name, score });
});

window.onload = () => {
  render(myData, scoreSection);
};