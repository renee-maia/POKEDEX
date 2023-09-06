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
          <div class="buttonModal">
          <button onclick="openModal(${
            pokemon.number
          })" class="open-modal">More</button>
          </div>
          <div id="modal_${pokemon.number} class="modal">
          <button onclick="closeModal(${
            pokemon.number
          })" class="open-modal">Close</button>
          </div>
      </li>
  `;
}

function openModal(id) {
  const modal = document.getElementById(`modal_${id}`);
}
function closeModal(id) {
  const modal = document.getElementById(`modal_${id}`);
}

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
