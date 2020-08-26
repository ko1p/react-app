import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
    render () {
        return (
            <div style={{padding: 20, border: '1px solid #ccc'}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                    <div>
                        <button onClick={() => this.props.onADD2(1)}>ADD 1</button>
                        <button onClick={() => this.props.onADD2(-1)}>SUB 1</button>
                    </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter2.counter
    }
}

function mapDispatchToState(dispatch) {
    return {
        onADD2: (number) => dispatch({type: 'onADD2', payload: number})
    }
}

export default connect(mapStateToProps, mapDispatchToState)(Counter)