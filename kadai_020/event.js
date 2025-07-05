// HTML内の要素を取得
const button = document.getElementById('btn');
const heading = document.getElementById('text');

// ボタンがクリックされたときの処理を定義
button.addEventListener('click', () => {
  heading.textContent = 'ボタンをクリックしました';
});