import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'
import {add, sub, onAddNumber, addAsync} from './redux/actions/actions'

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
          <hr/>
          <button onClick={() => this.props.addAsyncNumber(100)}>Добавим 100 асинхронно</button>
        </div>

        <Counter />
      </div>
    )
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  console.log(state)
  return {
    counter: state.counter1.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: number => dispatch(onAddNumber(number)),
    addAsyncNumber: number => dispatch(addAsync(number))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App)
