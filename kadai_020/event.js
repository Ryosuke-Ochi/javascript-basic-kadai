// idを持つHTML要素を取得して代入する
const clickBtn = document.getElementById('btn');

const clickText = document.getElementById('text');

// クリックしたときのイベント処理
clickBtn.addEventListener('click', () => {
    // 非同期処理
    setTimeout(() => {
        clickText.textContent = 'ボタンをクリックしました';
    }, 2000);
});