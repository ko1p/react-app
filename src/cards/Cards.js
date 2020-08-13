/* eslint-disable class-methods-use-this */
import React from 'react';
import Radium from 'radium';
import './Cards.css';

const card = (props) => {
  const inputClasses = ['input'];
  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length < 5) {
    inputClasses.push('bold')
  }

  const styles = {
    ":hover": {
      backgroundColor: "#ccc",
      transition: '.3s',
      cursor: 'pointer'
    }
  };

  return (
    <div className="Cards" style={styles}>
      <p>Модель: <strong>{props.name}</strong></p>
      <p>Год: <strong>{props.year}</strong></p>
      <input 
      className={inputClasses.join(' ')}
      type="text" 
      onChange={props.inputHandler} 
      value={props.name}
      ></input>
      <button onClick={props.deleteHendler}>DELETE CARD</button>
    </div>
  )
}

export default Radium(card);
