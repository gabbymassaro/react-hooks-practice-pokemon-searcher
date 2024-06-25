import React from "react"
import PokemonCard from "./PokemonCard"
import { Card } from "semantic-ui-react"

function PokemonCollection({ pokemonList, onSearchForPokemon }) {
  const renderSearchedPokemon =
    onSearchForPokemon.length > 0 ? onSearchForPokemon : pokemonList
  return (
    <div>
      <Card.Group itemsPerRow={6}>
        {renderSearchedPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Card.Group>
    </div>
  )
}

export default PokemonCollection
