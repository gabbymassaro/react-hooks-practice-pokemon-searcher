import React, { useState } from "react"
import { Form } from "semantic-ui-react"
import { v4 as uuid } from "uuid"

function PokemonForm({ addNewPokemon }) {
  const [formInput, setFormInput] = useState({
    id: uuid(),
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: "",
    },
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === "frontUrl" || name === "backUrl") {
      setFormInput({
        ...formInput,
        sprites: {
          ...formInput.sprites,
          [name === "frontUrl" ? "front" : "back"]: value,
        },
      })
    } else {
      setFormInput({
        ...formInput,
        [name]: value,
      })
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    addNewPokemon(formInput)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formInput.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formInput.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formInput.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default PokemonForm
