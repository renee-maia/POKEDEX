const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
      <li class="pokemon ${pokemon.type}">
          <span class="number">#${pokemon.number}</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
              <ol class="types">
                  ${pokemon.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
              </ol>

              <img src="${pokemon.photo}"
                   alt="${pokemon.name}">
          </div>
          <div class="divButtonModal">
          <button onclick="openModal(${
            pokemon.number
          })" class="modalButton">More</button>
          </div>


          <dialog id="modal_${pokemon.number}" class="modal ${pokemon.type}">
          <div class="divButtonModalClose">
          <button onclick="closeModal(${
            pokemon.number
          })" class="modalButton">Close</button>
          </div>
           
          <div class="modal-top">
              <h2 class="nameModal">${pokemon.name}</h2>
              <h2 class="numberModal">#${pokemon.number}</h2>
  
              <div class="detail">
                <ol class="types">
                  ${pokemon.types
                    .map(
                      (type) => `
                  <li class="type ${type}">${type}</li>
                  `
                    )
                    .join("")}
                </ol>
  
                <img src="${pokemon.photo}" alt="${pokemon.name}" />
              </div>
            </div>

            <div class="modal-bottom">
              <h3 class="modalAbout">About</h3>
<hr> 

              <ol class="modalDetailsList">
              <li class="detailTitle">Height: </li>  
              <li class="detailItem">${pokemon.height}</li>
              </ol>
              <ol class="modalDetailsList">              
              <li class="detailTitle">Weight: </li>  
              <li class="detailItem">${pokemon.weight}</li>
              </ol>
              <ol class="modalDetailsList">
              <li class="detailTitle">Abilities: </li>  
                ${pokemon.abilities
                  .map(
                    (ability) => `
                <li class="detailItem ${ability}">${ability}</li>
                `
                  )
                  .join("")}
                  </ol>
<hr>
                  <ol class="modalMovesList">
              <h3 class="detailTitle">Moves: </h3>  
                ${pokemon.moves
                  .map(
                    (move) => `
                <li class="move ${move}">${move}</li>
                `
                  )
                  .join("")}
                  </ol>
              </ol>
            </div>
        </dialog>

          </li>
  `;
}

// function openModal(id) {
//   const modal = document.getElementById(`modal_${id}`);
// }
// function closeModal(id) {
//   const modal = document.getElementById(`modal_${id}`);
// }

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

function openModal(pokemonNumber) {
  const modal = document.getElementById(`modal_${pokemonNumber}`);
  modal.showModal();
}

function closeModal(pokemonNumber) {
  const modal = document.getElementById(`modal_${pokemonNumber}`);
  modal.close();
}
