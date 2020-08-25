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
          <button onClick={() => this.updateCounter(1)}>Добавить 1</button>
          <button onClick={() => this.updateCounter(-1)}>Вычесть 1</button>
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

export default connect(mapStateToProps)(App)
