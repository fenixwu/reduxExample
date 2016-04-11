import React from 'react';
import CounterBtns from 'components/CounterBtns';
import Monitor from 'components/Monitor';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let counters = this.props.counter.map((counter, index) =>
      <div key={ index } className="counter">
        <Monitor counter={ counter } />
        <CounterBtns
          index={ index }
          actions={ this.props.actions }
        />
      </div>
    );

    return <div className="counter-wrap clearfix">{ counters }</div>;
  }
}
