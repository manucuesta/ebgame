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

  changeComponent = (componentName) => {
    this.setState({
      showComponent: componentName
    });
    if (componentName === '') {
      this.resetGame();
    }
    else if (componentName === 'VSCPU') {
      this.setCPUNumber();
    }
    else if (componentName === 'VSHUMAN') {
      this.generateNumber();
    }
  }

  isCPUNumber = (number) => {
    const intNumber = Number(number);
    const message = this.state.number !== intNumber ? (this.state.number > intNumber ? 'The number is bigger.' : 'The number is smaller.') : 'The number is correct.';

    this.setState({
      message: message,
    });

    if(message === 'The number is correct.'){
      setTimeout(() => {
        this.changeComponent('');
      }, 2000);
    }
  }

  setCPUNumber = () => {
    const number = this.getRandomInt(this.state.minNumber, this.state.maxNumber);
    this.setState({
      number: number,
    });
  }

  resetGame = () => {
    this.setState({
      number: 0,
      minNumber: 1,
      maxNumber: 100,
      message: 'Guess the number.',
    });
  }

  getRandomInt = (min, max) => {
    console.log(min, max);
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateNumber = () => {
    this.setState(oldState => {
      const number = this.getRandomInt(oldState.minNumber, oldState.maxNumber);
      return {
        generatedNumber: number
      }
    });
  }

  changeRange = (min, max) => {
    this.setState({
      minNumber: min,
      maxNumber: max
    });    
  }

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
          {this.state.showComponent === '' && <Home changeComponent={this.changeComponent}></Home>}
          {this.state.showComponent === 'VSCPU' && <VSCPU isCPUNumber={this.isCPUNumber} sendAnswer={this.sendAnswer} clearMessage={this.clearMessage} {...this.state}></VSCPU>}
          {this.state.showComponent === 'VSHUMAN' && <VSHUMAN changeRange={this.changeRange} generateNumber={this.generateNumber} changeComponent={this.changeComponent} {...this.state}></VSHUMAN>}
        </article>
      </div>
    );
  }
}

export default App;