const offsetDesafio = 0;
const limitDesafio = 30;

const url =
  "https://pokeapi.co/api/v2/pokemon/1?offset=${offsetDesafio}&limit=${limitDesafio}";

// // (etapa 3 - criando uma função para conversão de cada pokemon de json para o formato Html previamente criado no index.html)
// function convertPokemonToLi(pokemon) {
//   return `
//     <li class="pokemon">
//                 <span class="number">#001</span>
//                 <span class="name">${pokemon.name}</span>

//                 <div class="detail">
//                     <ol class="types">
//                         <li class="type">grass</li>
//                         <li class="type">poison</li>
//                     </ol>

//                     <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
//                         alt="${pokemon.name}">
//                 </div>
//             </li>`;
// }

//   (etapa 1 - partindo da primeira requisição)
// //   solicita as informações da URL
// fetch(url)
//   // recebe as respostas (response) e converte elas para um bodyJson
//   .then((response) => response.json())
//   //   recebe esse bodyJson e pede sua impressão
//   .then((jsonBody) => console.log(jsonBody))
//   //   se a requisição der errado, imprime o erro no console
//   .cath((error) => console.error(error));

// (continuação abaixo - etapa 2)

// //   solicita as informações da URL
// fetch(url)
//   // recebe as respostas (response) e converte elas para um bodyJson
//   .then((response) => response.json())
//   //   recebe esse bodyJson e pede somente a parte Results dele
//   .then((jsonBody) => jsonBody.results)
// recebe jsonBody.results (=pokemonList) e imprime essa lista
// .then ((pokemonList) => {
//     console.log (pokemonList)
// });
//   //   se a requisição der errado, imprime o erro no console
//   .cath((error) => console.error(error));

// (etapa 4 - manipulando a lista de pokemons e solicitando a exibição com cada item já no formato html(item/Li) convertido na etapa anterior. Como resultado, exibe no console uma lista de Lis)
// fetch(url)
//   // recebe as respostas (response) e converte elas para um bodyJson
//   .then((response) => response.json())
//   //   recebe esse bodyJson e pede somente a parte Results dele
//   .then((jsonBody) => jsonBody.results)
// recebe jsonBody.results (=pokemonList) e imprime essa lista
// .then ((pokemonList) => {
//

// for (let i = 0; i < pokemonList.length; i++) {
//     const pokemon = pokemonList[i];
// console.log (convertPokemonToLi(pokemon))
// }
// });

// etapa 5 - colocando o conjunto de Lis gerado dentro da lista Html (ol)
// document = html exibido no browser no momento, getElementById = pega ou solicita um desses elementos, identificando-o por sua id (lembrando que cada id só pode ser usado 1 vez no código, já uma classe pode ser atribuída a mais de um). No caso, estamos pegando o elemento lista de pokemons (ol).
// em seguida, atribuo isso a uma constante para poder manipula-la
// const pokemons = document.getElementById('pokemonList')
//
// para adicionar/concatenar ao conteúdo da lista que já existe, mais um item - no caso, apenas um teste estático:
// pokemonList.innerHtml += <li>Teste</li>

// para concatenar não um item fixo, mas sim com o resultado que veio da lista (na etapa 4), ou seja, (convertPokemonToLi(pokemon)):

//   .then((response) => response.json())
//   .then((jsonBody) => jsonBody.results)
// .then ((pokemons) => {
//
// for (let i = 0; i < pokemons.length; i++) {
//     const pokemon = pokemons[i];
// pokemonList.innerHtml += (convertPokemonToLi(pokemon))
// }
// });
// como resultado, terei adicionado à minha ol todos os pokemons listados, já em formato html/li

// // DESAFIO (sobre os tipos dos pokemons e dados contidos já na URL de detalhes):
// function convertPokemonTypesToLi(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);

// // Em seguida, na função convertPokemonToLi(pokemonTypes) já posso atualizar os valores de tipo para apresentação dinâmica:

// function convertPokemonToLi (pokemonTypes) {
//     return `
//     <li class="pokemon">
//     <span class="number">#${pokemon.order}</span>
//     <span class="name">${pokemon.name}</span>

//     <div class="detail">
//         <ol class="types">
// ${convertPokemonTypesToLi(pokemon.types).join('')}
//         </ol>

//         <img src="${pokemon.sprites.order.dream_world.front_default}"
//  alt="${pokemon.name}">
//     </div>
// </li>`
// }
// }
