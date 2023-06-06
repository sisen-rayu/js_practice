import '../scss/style.scss';

const $countBox = document.querySelector('#count');
const $buttonPlus = document.querySelector('.button_plus');
const $buttonMinus = document.querySelector('.button_minus');
const $bannerContent = Array.from(document.querySelectorAll('.banner_content'));
const $bannerNumberBox = document.querySelector('.banner_number');

let count = 0;
$countBox.innerHTML = count;
console.log($bannerContent.length); //liの数を取得
$bannerNumberBox.innerHTML = $bannerContent.length;

const timer = setInterval(() => {
  count++;
  if (count > 5) {
      clearInterval(timer);
      count = 0;
  }
  $countBox.innerHTML = count;
}, 1000);

$buttonPlus.addEventListener('click', () => {
  count++;
  $countBox.innerHTML = count;
});

$buttonMinus.addEventListener('click', () => {
  count--;
  $countBox.innerHTML = count;
});