// NAVBAR
const navbarItems = document.querySelector('.navbar-items');
const buttons = document.querySelector('.buttons');

// to toggle the images of the navbar;
const navbarOpen = document.querySelector('.open');
const navbarClose = document.querySelector('.close');

buttons.addEventListener("click", function(event){
 navbarItems.classList.toggle('active');

 // toggling the buttons based on the state of the navbar-items;
 if(navbarItems.classList.contains('active')){
  navbarClose.style.display = 'block';
  navbarOpen.style.display = 'none';
 }
 else{
  navbarClose.style.display = 'none';
  navbarOpen.style.display = 'block';
 }
});