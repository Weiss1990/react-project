import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return <div className="navigation">
      <Link to="/items-list">items</Link>
      <Link to="/my-form">form</Link>
    </div>;
  }
}

export default Navigation;
