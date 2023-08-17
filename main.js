const rickElement = document.querySelector(".rick-sanchez");
let characterString = "";

async function getCharacter(id) {
  fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {

      
      rickElement.innerHTML = response;
    })
    
}

async function init() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const { results } = response;

      results.forEach(showCharacters);

      rickElement.innerHTML = `<div class="characters_container">${characterString}</div>`
    });
}

function showCharacters(character) {
  characterString = characterString + `
    <div class="character_profile">
      <img src="${character.image}">
      <div class="character_atributes">
        <button class="characters_button" onclick="getCharacter(${character.id})">Name: ${character.name}</button>
        <div>Gender: ${character.gender}</div>
        <div>Location: ${character.location.name}</div>
      </div>
    </div>
  `
}

function showSingleCharacter(atributes) {
  characterString = characterString + `
  <div class="character_name">${atributes.name}</div>
  <div class="character_name">${atributes.name}</div>
  <div class="character_name">${atributes.name}</div>
  <div class="character_name">${atributes.name}</div>
  <div class="character_name">${atributes.name}</div>
  <div class="character_name">${atributes.name}</div>

  `
}

init();