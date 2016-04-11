import React from 'react';

export default class Monitor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{ this.props.state } </h1>;
  }
}
