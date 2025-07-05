// 要素を取得
const button = document.getElementById('btn');
const heading = document.getElementById('text');

// ボタンクリック時の処理
button.addEventListener('click', () => {
  setTimeout(() => {
    heading.textContent = 'ボタンをクリックしました';
  }, 2000); // 2000ミリ秒 = 2秒
});