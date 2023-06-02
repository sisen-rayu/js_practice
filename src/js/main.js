const $countBox = document.querySelector('#count');

let count = 0;
$countBox.innerHTML = count;

setInterval(() => {
    count++;
    $countBox.innerHTML = count;
}, 1000);