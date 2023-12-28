// const goTopBtn = document.querySelector('.go-top-btn');

// window.addEventListener('scroll', checkHeight)

// function checkHeight(){
//   if(window.scrollY > 200) {
//     goTopBtn.style.display = "flex"
//   } else {
//     goTopBtn.style.display = "none"
//   }
// }

// goTopBtn.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth"
//   })
// })

const goTopBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
  if(window.scrollY > 200) {
    goTopBtn.style.display = "flex"
  } else {
    goTopBtn.style.display = "none"
  }
}

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

