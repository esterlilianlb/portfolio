const projectList = PROJECTS.projects;
const divCards = document.querySelector('.cards-container');

function printCards() {

  projectList.map(item => {
    divCards.innerHTML += `
    <div class="project">
      <img src="${item.img}">
      <h4>${item.titulo}</h4>
      <p class="stack">${item.stack}</p>
      <p>${item.sobre}</p>
      <a href="${item.link}">Visite a página</p>
      <a href="">Github</a>
    </div>
    `
  })

}
printCards();