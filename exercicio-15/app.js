/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

const ul = document.querySelector('.videos');
const childrenArray = Array.from(ul.children);

const addNewClass = li => li.classList.add('video');

childrenArray.forEach(addNewClass)

// console.log(ul.children);

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const secondaryTitle = document.querySelector('h2');

// console.log(secondaryTitle.parentElement);

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const mainTitle = document.querySelector('h1');

// console.log(mainTitle.nextElementSibling);

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

// console.log(ul.previousElementSibling);

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const lis = document.querySelectorAll('.video');

const showClickedElement = (event) => console.log(event.target);

const handleLICLick = item => item.addEventListener('click', showClickedElement);

lis.forEach(handleLICLick)

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}];
const button = document.querySelector('button');

const addNewItem = ({ name }) => ul.innerHTML += `<li>${name}</li>`;

const handleButtonClick = () => videos.forEach(addNewItem);

button.addEventListener('click', handleButtonClick)

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const removeAllElements = () => {
  const body = document.body;

  body.innerHTML = ''
}

mainTitle.addEventListener('click', removeAllElements);
