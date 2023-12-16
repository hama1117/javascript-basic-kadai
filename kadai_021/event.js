const addText = document.getElementById('text');
const addBtn = document.getElementById('btn');

addBtn.addEventListener('click',  () => {
  setTimeout(() => {
    addText.innerHTML = 'ボタンをクリックしました'
  }, 2000);
});