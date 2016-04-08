import React from 'react';

export default class CounterBtns extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncreseNum = this.handleIncreseNum.bind(this);
    this.handleDecreaseNum = this.handleDecreaseNum.bind(this);
    this.handleRemoveCounter = this.handleRemoveCounter.bind(this);
    this.handleFreeze = this.handleFreeze.bind(this);
  }

  handleIncreseNum (index) {
    this.props.actions.counterIncrease(index);
  }

  handleDecreaseNum (index) {
    this.props.actions.counterDecrease(index);
  }

  handleRemoveCounter (index) {
    this.props.actions.removeCounter(index);
  }
  handleFreeze (index) {
    this.props.actions.freezeCounter(index);
  }

  render() {
    return (
      <div className="btns-wrap">
        <div className="btns-counter-ctrl">
          <button onClick={ this.handleIncreseNum.bind(this, this.props.index) }> + </button>
          <button onClick={ this.handleDecreaseNum.bind(this, this.props.index) }> - </button>
        </div>
        <button className="btn-remove" onClick={ this.handleRemoveCounter.bind(this, this.props.index) }>Remove</button>
      </div>
    );
  }
}
