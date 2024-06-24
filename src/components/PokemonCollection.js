import React from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"

function PokemonCollection({ pokemonList }) {
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Card.Group>
    </div>
  )
}

export default PokemonCollection
