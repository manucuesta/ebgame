import React, { Component } from 'react'

export default class VsHuman extends Component {
  render() {
    const { generatedNumber, generateNumber, changeComponent, changeRange, minNumber, maxNumber } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
            {/* Tell to the CPU that the number is smaller */}
            <button className="btn btn-dark mr-2 mt-2" onClick={() => { changeRange(minNumber, generatedNumber - 1); generateNumber(); }}>{'v'}</button>
            <span className="cpu-number">{generatedNumber}</span>
            {/* Tell to the CPU that the number is bigger */}
            <button className="btn btn-dark ml-2 mt-2" onClick={() => { changeRange(generatedNumber + 1, maxNumber); generateNumber(); }}>{'^'}</button>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-3  mt-2">
            {/* Restart the game as the number is correct and go to the main screen */}
            <button className="btn btn-dark" onClick={() => changeComponent('')}>Correct!</button>
          </div>
        </div>
      </div>
    )
  }
}
