import './styles.css';
import { onAddscore, getData } from './modules/control-leaderboard.js';

const myId = 'Hniuy9bOcPZOzDXGMRWx';

const endPointApi = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${myId}/scores/`;

//   adding the button to submit score
const onScoresAddForm = document.querySelector('#add-score');
onScoresAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('name');
  const score = document.getElementById('score');
  const button = document.getElementById('submit-score');
  button.disabled = true;

  const result = onAddscore(endPointApi, { user: userName.value, score: score.value });
  if (result) {
    userName.value = '';
    score.value = '';
    button.disabled = false;
  }
});

document.getElementById('refresh-scores').addEventListener('click', () => {
  getData(endPointApi);
});

window.onload = async () => {
  getData(endPointApi);
};