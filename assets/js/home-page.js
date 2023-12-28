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
document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      let headerOffset = document.querySelector('.navigation').offsetHeight;

      // Adjust offset only for the 'About' section
      if (targetId === '#about') {
        headerOffset += 110; // Subtract 100 from the headerOffset for the 'About' section
      }

      const targetOffset = targetSection.offsetTop - headerOffset;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    }
  });
});