import InputSearch from "./components/InputSearch";
import PokemonCard from "./components/PokemonCard";

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
      <InputSearch />
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} />
      ))}
    </>
  )
}

export default App
