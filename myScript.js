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