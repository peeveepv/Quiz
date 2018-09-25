import React from 'react'
import { Button, Message } from 'semantic-ui-react'

const Intro = ({ start, history }) => {

  const handleClick = () => {
    start(history)
  }

  return(
    <Message>
      <Message.Header>Tervetuloa Kekkosvisaan!</Message.Header>
      <p> Aloita peli painamalla Aloita-nappia.</p>
      <Button onClick={handleClick}>Aloita</Button>
    </Message>
  )
}

export default Intro