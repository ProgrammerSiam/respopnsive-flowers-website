/*=============== NAV ===============*/
let bar = document.querySelector("#bar");
let nav = document.querySelector(".navbar");

bar.onclick = () => {
  bar.classList.toggle("fa-times");
  nav.classList.toggle("active");
};

window.onscroll = () => {
  bar.classList.remove("fa-times");
  nav.classList.remove("active");
};



