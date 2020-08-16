import React, { Component } from 'react';
import './App.css';
import Cards from './cards/Cards';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {name: 'ford', year: 2016},
        // {name: 'mazda', year: 2010},
        // {name: 'opel', year: 2011}
      ],
      isCardsShow: false,
    }
  }

  deleteHendler(index) {
    const newCarsState = this.state.cars.concat();
    newCarsState.splice(index, 1)
    this.setState({ cars: newCarsState })
  }

  inputHandler(name, index) {
    const newCarsState = [...this.state.cars];
    newCarsState[index].name = name;
    this.setState({name})
  }

  toggleMenu = () => {
    this.setState({
      isCardsShow: !this.state.isCardsShow
    })
  }

  componentWillMount() {
    console.log('App componentWillMount')
  }

  componentDidMount() {
    console.log('App componentDidMount')
  }



  render() {

    console.log('App render')

    return (
      <div style={{
        textAlign: "center",
        width: 230,
        margin: 'auto'
      }}>
        <p>{this.props.title}</p>
        <button onClick={this.toggleMenu}>show/hide</button>
        <Counter />

        {
          this.state.isCardsShow ? 
            this.state.cars.map((car, index) => {
              return (
                <ErrorBoundary key={index}> 
                  <Cards 
                    name={car.name}
                    year={car.year}
                    deleteHendler={() => this.deleteHendler(index)}
                    inputHandler={(event) => this.inputHandler(event.target.value, index)}
                  />
                </ErrorBoundary>              )
            })
          : 
            null
        }
      </div>
    )
 



  }

}

export default App;
