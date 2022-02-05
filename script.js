const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
       nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
       nav.classList.remove('active');
    })
}

let loadMoreBtn = document.querySelector('#load-more');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.product1 .pro .des')];
   for (var i = currentItem; i < currentItem + 5; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 5;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}