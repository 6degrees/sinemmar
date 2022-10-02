// get the element by id
let navbar = document.getElementById('navbar');

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          navbar.classList.add('fixed-top');
          navbar.classList.add('bg-white');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          navbar.classList.remove('fixed-top');
          navbar.classList.remove('bg-white');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 