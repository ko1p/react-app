import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'

class App extends Component {
  
  updateCounter(value) {
    // this.setState({
    //   counter: this.state.counter + value
    // })
  }

  render() {
    console.log('APP', this.props)
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={() => this.props.onAddNumber(14)}>Добавить 14</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onAddNumber: (number) => dispatch({type: 'onAddNumber', payload: number})

  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App)
