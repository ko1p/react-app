import React from 'react'
import Auxillary from '../hoc/Auxillary'

export default class Counter extends React.Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    reduceCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render () {
        return(
            <Auxillary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={this.reduceCounter}>-</button>
            </Auxillary>
        )
    }
}