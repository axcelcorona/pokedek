const pokemons = [];

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => response.json())
    .then((data) => pokemons.push(data));
}

pokemons.map((pokemon) => console.log(pokemon));
