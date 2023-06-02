const $countBox = document.querySelector('#count');

let count = 0;
$countBox.innerHTML = count;

const timer = setInterval(() => {
    if(count >= 5) {
        count = 0;
    } else {
      count++;
    }
    $countBox.innerHTML = count;
}, 1000);