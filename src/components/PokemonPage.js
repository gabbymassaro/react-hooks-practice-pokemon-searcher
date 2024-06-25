import React, { useEffect, useState } from "react"
import PokemonCollection from "./PokemonCollection"
import PokemonForm from "./PokemonForm"
import Search from "./Search"
import { Container } from "semantic-ui-react"

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data))
  }, [])

  function onNewPokemonSubmit(newPokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      body: JSON.stringify(newPokemon),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPokemonList([...pokemonList, data])
      })
  }

  function handleSearchInput(input) {
    setSearch(input)
  }

  const onSearchForPokemon = pokemonList.filter((pokemon) => {
    if (search === "") return true

    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={onNewPokemonSubmit} />
      <br />
      <Search search={search} onSearch={handleSearchInput} />
      <br />
      <PokemonCollection
        pokemonList={pokemonList}
        onSearchForPokemon={onSearchForPokemon}
      />
    </Container>
  )
}

export default PokemonPage
