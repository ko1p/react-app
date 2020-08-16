/* eslint-disable class-methods-use-this */
import React from 'react';
// import Radium from 'radium';
import './Cards.css';

class Cards extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log('Cards componentWillReceiveProps', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Cards shouldComponentUpdate', nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim()
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Cards componentWillUpdate', nextProps, nextState)
  }

  // static getDerivedStateFromProps(nexpProps, prevState) {
  //   console.log('getDerivedStateFromProps', nexpProps, prevState)
  //   return prevState
  // }

  componentDidUpdate(nextProps, nextState) {
    console.log('Cards componentDidUpdate', nextProps, nextState)
  }

  // getSnapshotBeforeUpdate() {
  //   console.log('Cards getSnapshotBeforeUpdate')
  // }

  componentWillUnmount() {
    console.log('Cards componentWillUnmount')
  }

  render() {
    console.log('Cards render')

    if (Math.random() > 0.6) {
      throw new Error('Card is failed')
    }

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

export default Cards
