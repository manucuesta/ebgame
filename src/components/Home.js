import React, { Component } from 'react'

export default class Home extends Component {
  render() {
      const {changeComponent} = this.props;
    return (      
      <div className="row justify-content-md-center">
        <div className="col-12 col-md-3 mt-2 mt-md-0">
          <button className="btn btn-dark w-100" onClick={() => changeComponent('VSCPU')}>Guess CPU number</button>
        </div>
        <div className="col-12 col-md-3 mt-2 mt-md-0">
          <button className="btn btn-dark w-100" onClick={() => changeComponent('VSHUMAN')}>Guess human number</button>
        </div>
      </div>
    )
  }
}
