/* eslint-disable class-methods-use-this */
import React from 'react';
import Radium from 'radium';
import './Cards.css';

class Cards extends React.Component {
  render() {
    const inputClasses = ['input'];
    if (this.props.name !== '') {
      inputClasses.push('green')
    } else {
      inputClasses.push('red')
    }
  
    if (this.props.name.length < 5) {
      inputClasses.push('bold')
    }
  
    const styles = {
      ":hover": {
        backgroundColor: "#F1FCFE",
        transition: '.3s',
        cursor: 'pointer',
        boxShadow: '2px 2px 2px 2px black'
      }
    };
  
    return (
      <div className="Cards" style={styles}>
        <p>Модель: <strong>{this.props.name}</strong></p>
        <p>Год: <strong>{this.props.year}</strong></p>
        <input 
        className={inputClasses.join(' ')}
        type="text" 
        onChange={this.props.inputHandler} 
        value={this.props.name}
        ></input>
        <button style={{marginTop: 15}} onClick={this.props.deleteHendler}>DELETE CARD</button>
      </div>
    )
  }
}

// const card = (props) => {
//   const inputClasses = ['input'];
//   if (props.name !== '') {
//     inputClasses.push('green')
//   } else {
//     inputClasses.push('red')
//   }

//   if (props.name.length < 5) {
//     inputClasses.push('bold')
//   }

//   const styles = {
//     ":hover": {
//       backgroundColor: "#F1FCFE",
//       transition: '.3s',
//       cursor: 'pointer',
//       boxShadow: '2px 2px 2px 2px black'
//     }
//   };

//   return (
//     <div className="Cards" style={styles}>
//       <p>Модель: <strong>{props.name}</strong></p>
//       <p>Год: <strong>{props.year}</strong></p>
//       <input 
//       className={inputClasses.join(' ')}
//       type="text" 
//       onChange={props.inputHandler} 
//       value={props.name}
//       ></input>
//       <button style={{marginTop: 15}} onClick={props.deleteHendler}>DELETE CARD</button>
//     </div>
//   )
// }

export default Radium(Cards)
