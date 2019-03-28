import React, { Component } from 'react'

export default class Header extends Component {
  render() {
      const {changeComponent} = this.props;
    return (
      <nav className="navbar navbar-dark bg-dark">
        <button className="btn btn-outline-light" onClick={() => changeComponent('')}>Home</button> 
      </nav>
    )
  }
}
