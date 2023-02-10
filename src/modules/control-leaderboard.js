export const render = (data) => {
  const scoreContainer = document.querySelector('.scores-list');
  let domUI = [];
  if (data.length > 0) {
    data.forEach((item) => {
      domUI += `<li class='score-item'>
      ${item.user}: <span class="badge-score">${item.score}</span>
      </li>`;
    });
  } else {
    domUI = '<p class=\'no-item\'>No score to display</p>';
  }
  scoreContainer.innerHTML = domUI;
};
export const onAddscore = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  return result;
};

export const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  render(data.result);
};