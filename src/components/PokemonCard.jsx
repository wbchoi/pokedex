import React from 'react'

const PokemonCard = ({ pokemon }) => {

  return (
    <div 
      style={{
        backgroundColor: '#FAF8F5',
        width: '150px',
        height: '150px',
        borderRadius: '10px',
        textAlign: 'center',
        padding: '8px',
        margin: '15px',
        boxShadow: '2px 2px 5px rgba(0,0,0,.2)'
      }}
    >
      <p
        style={{
          textAlign: 'right',
          color: 'rgba(0,0,0,.3)'
        }}
      >#{pokemon.id}</p>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p
        style={{
          fontSize: '16px'
        }}
      >{pokemon.name}</p>
    </div>
  )
}

export default PokemonCard