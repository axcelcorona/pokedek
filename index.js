const main = document.getElementById("main");

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => viewPokemon(data));
}

const viewPokemon = (pokemon) => {
  let { types } = pokemon;

  //main.innerHTML = ``;

  //console.log(types);
};
