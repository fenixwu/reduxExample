import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/counter">Counter</Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}
