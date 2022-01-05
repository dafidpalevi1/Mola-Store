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

/*login */
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});