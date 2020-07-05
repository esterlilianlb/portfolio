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
  }
}

modalLink.onclick = () => {
  modal.style.display = "none"
}

