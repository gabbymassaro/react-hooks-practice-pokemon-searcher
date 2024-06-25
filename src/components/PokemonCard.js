import React, { useState } from "react"
import { Card } from "semantic-ui-react"

function PokemonCard({ pokemon }) {
  const { name, hp, sprites } = pokemon
  const { front, back } = sprites
  const [spriteState, setSpriteState] = useState(false)

  function handleOnClick() {
    setSpriteState((spriteState) => !spriteState)
  }

  return (
    <Card>
      <div>
        <div className="image">
          {spriteState === false ? (
            <img alt={name} src={front} onClick={handleOnClick} />
          ) : (
            <img alt={name} src={back} onClick={handleOnClick} />
          )}
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
