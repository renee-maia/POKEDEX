class Pokemon {
  number;
  name;
  type;
  types = [];
  photo;
  height;
  weight;
  abilities = [];
  // lembrar de fazer o join dessa lista de abilities
  moves = [];
  // lembrar de fazer o join dessa lista de moves

  constructor(pokeDetail) {
    this.number = pokeDetail.id;
    this.name = pokeDetail.name;
    this.height = pokeDetail.height;
    this.weight = pokeDetail.weight;
    this.abilities = pokeDetail.abilities.map((ability) => {
      return ability.ability.name;
    });
    this.moves = pokeDetail.moves.map((move) => {
      return move.move.name;
    });
    const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name);
    const [type] = types;
    this.types = types;
    this.type = type;

    this.photo = pokeDetail.sprites.other.dream_world.front_default;
  }
}
