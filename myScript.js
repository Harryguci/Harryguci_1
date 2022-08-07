// document.getElementsByTagName('html')[0].style.overflow = "hidden";
window.scrollTo({ top: 0, behavior: 'smooth' });

function closeMessage() {
  const dark_screen_element = document.getElementById('screen1');
  const mess_element = document.getElementById('Me1');
 
  dark_screen_element.style.opacity = '0';
  mess_element.style.opacity = '0';
  
  setTimeout(function() { 
    dark_screen_element.style.display = 'none';
    mess_element.style.display = 'none';
   }, 500);
}


function Open_Menu() {
  var backgroundElement = document.getElementById('dark-scr-op2');
  var menuElement = document.getElementById('contai-op2');
  backgroundElement.style.display = 'block';
  menuElement.style.display = 'block';
  menuElement.style.left = '0';
}
function Close_Menu() {
  var backgroundElement = document.getElementById('dark-scr-op2');
  var menuElement = document.getElementById('contai-op2');
  backgroundElement.style.display = 'none';
  menuElement.style.left = '-100%';
  setTimeout(function() {
    menuElement.display = 'none';
  }, 300)
}