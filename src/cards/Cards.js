/* eslint-disable class-methods-use-this */
import React from 'react';

const card = (props) => {
  return (
    <div>
      <p>Модель: <strong>{props.name}</strong></p>
      <p>Год: <strong>{props.year}</strong></p>
      <input type="text" onChange={props.inputHandler} placeholder={props.name}></input>
      <button onClick={props.deleteHendler}>DELETE CARD</button>
    </div>
  )
}

export default card;
