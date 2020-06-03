const navBar = document.querySelector('.menu-burger');

navBar.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  const list = document.querySelector('.menu-list');
  if(list.style.display === 'none') {
    list.style.display = 'block';
    nav.style.background = '#ffffff'
  } else {
    list.style.display = 'none';
    list.classList.remove('show')
    nav.style.background = 'none'
  }
  
})

