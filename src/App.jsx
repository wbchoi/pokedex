function App() {

  // mock data
  const pokemons = [
    {
      "id": 1,
      "name": "bulbasaur",
      "height": 7,
      "weight": 69,
      "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      },
      "types": [
        { "type": { "name": "grass" } },
        { "type": { "name": "poison" } }
      ]
    },
    {
      "id": 2,
      "name": "ivysaur",
      "height": 10,
      "weight": 130,
      "sprites": {
        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      },
      "types": [
        { "type": { "name": "grass" } },
        { "type": { "name": "poison" } }
      ]
    }
  ];

  return (
    <>
      <PokemonCard pokemon={pokemons[0]} />
    </>
  )
}

export default App
