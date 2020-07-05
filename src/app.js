const modal = document.querySelector('.modal');
const span = document.querySelector('.close-modal');
const button = document.querySelector('#open-modal');
const modalLink = document.querySelectorAll('.modal-content-link')

button.onclick = () => {
  modal.style.display = "block";
  button.style.display = "none"
}

span.onclick = () => {
  modal.style.display = "none";
  button.style.display = "block";
}

window.onclick = (event) => {
  if(event.target == modal) {
    modal.style.display = "none"
    button.style.display = "block";
  }
}

modalLink.onclick = () => {
  modal.style.display = "none"
}

//progress bar

const progress = document.querySelectorAll('.progress-done');

progress.forEach(item => {
  item.style.width = item.getAttribute('data-done') + '%';
  item.style.opacity = 1;
})
