import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import VSCPU from './components/VsCPU';
import VSHUMAN from './components/VsHuman';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: '',
      number: 0,
      minNumber: 1,
      maxNumber: 100,
      message: 'Guess the number.',
      generatedNumber: 0
    };
  }

  // Changes the component being rendered
  changeComponent = (componentName) => {
    this.setState({
      showComponent: componentName
    });
    if (componentName === '') {
      // Resets the game when going to the home
      this.resetGame();
    }
    else if (componentName === 'VSCPU') {
      // Sets the CPU random secret number
      this.setCPUNumber();
    }
    else if (componentName === 'VSHUMAN') {
      // Generates the first random guess for the human number
      this.generateNumber();
    }
  }

  // Function to check if the name introduced by the user is smaller or bigger than the CPU number or if it is correct
  isCPUNumber = (number) => {
    const intNumber = Number(number);
    const message = this.state.number !== intNumber ? (this.state.number > intNumber ? 'The number is bigger.' : 'The number is smaller.') : 'The number is correct.';

    this.setState({
      message: message,
    });

    // If the number is correct, redirects after 2 seconds to the home to start a new game.
    if(message === 'The number is correct.'){
      setTimeout(() => {
        this.changeComponent('');
      }, 2000);
    }
  }

  // Sets the CPU random secret number
  setCPUNumber = () => {
    const number = this.getRandomInt(this.state.minNumber, this.state.maxNumber);
    this.setState({
      number: number,
    });
  }

  // Resets the game to the initial state
  resetGame = () => {
    this.setState({
      number: 0,
      minNumber: 1,
      maxNumber: 100,
      message: 'Guess the number.',
      generatedNumber: 0
    });
  }

  // returns a random int between the limits
  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generates a random guess for the human number
  generateNumber = () => {
    // We add the oldState as this depends on the range change first, we need to make the setState syncrhonous here
    this.setState(oldState => {
      const number = this.getRandomInt(oldState.minNumber, oldState.maxNumber);
      return {
        generatedNumber: number
      }
    });
  }

  // Changes the ranges to next values for the random CPU guess
  changeRange = (min, max) => {
    this.setState({
      minNumber: min,
      maxNumber: max
    });    
  }

  // Function called when the human makes a new guess to restart the messages area.
  clearMessage = () => {
    this.setState({
      message: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <Header changeComponent={this.changeComponent}></Header>
        </header>
        <article className="container-fluid mt-4">
          {/* Depending on the show component property would load a different component */}
          {this.state.showComponent === '' && <Home changeComponent={this.changeComponent}></Home>}
          {this.state.showComponent === 'VSCPU' && <VSCPU isCPUNumber={this.isCPUNumber} sendAnswer={this.sendAnswer} clearMessage={this.clearMessage} {...this.state}></VSCPU>}
          {this.state.showComponent === 'VSHUMAN' && <VSHUMAN changeRange={this.changeRange} generateNumber={this.generateNumber} changeComponent={this.changeComponent} {...this.state}></VSHUMAN>}
        </article>
      </div>
    );
  }
}

export default App;