import React, { Component } from 'react'

export default class VsCPU extends Component {
  // Creates a reference of the input to identify it
  saveRef = (inputRef) => {
    this.inputRef = inputRef;
  }

  render() {
    const { minNumber, maxNumber, isCPUNumber, message, clearMessage } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-3">
                {/* Input for the human guess */}
                <input onChange={clearMessage} type="number" className="form-control w-100" ref={this.saveRef} min={minNumber} max={maxNumber} placeholder="1-100"></input>
              </div>
              <div className="col-12 col-md-1">
                {/* Checks on click if the guess was correct and show the corresponding message */}
                <button className="btn btn-dark w-100 mt-2 mt-md-0" onClick={() => isCPUNumber(this.inputRef.value)}>Check</button>
              </div>
            </div>
          </div>
          {message}
        </div>
      </div>
    )
  }
}
