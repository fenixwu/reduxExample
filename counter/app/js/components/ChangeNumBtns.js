import React from 'react';

export default class ChangeNumBtns extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncreseNum = this.handleIncreseNum.bind(this);
    this.handleDecreaseNum = this.handleDecreaseNum.bind(this);
  }

  handleIncreseNum () {
    this.props.actions.increaseNum();
  }

  handleDecreaseNum () {
    this.props.actions.decreaseNum();
  }

  render() {
    return (
      <div className="btns">
        <button onClick={ this.handleIncreseNum }> + </button>
        <button onClick={ this.handleDecreaseNum }> - </button>
      </div>
    );
  }
}
