// btnというidを持つHTML要素を取得し、定数に代入する
const clickBtn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const clickText = document.getElementById('text');


// HTML要素がクリックされたときにイベント処理を行う
clickBtn.addEventListener('click', () => {
    //HTML要素内のテキストを変更する 
    clickText.textContent = 'ボタンをクリックしました';
});