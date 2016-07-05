import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  counterIncrease,
  counterDecrease,
  addCounter,
  removeCounter,
} from 'actions/counter';
import Counter from 'components/Counter';
import { Link } from 'react-router';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddCounter = this.handleAddCounter.bind(this);
  }

  handleAddCounter() {
    this.props.actions.addCounter();
  }

  render() {
    const { actions, counter } = this.props;

    return (
      <div className="page-counter">
        <button className="btn-add" onClick={ this.handleAddCounter }>Add Counter</button>
        <Counter
          actions={ actions }
          counter={ counter }
        />
        <Link to="/about"><span className="link">About</span></Link>
      </div>
      );
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    counterIncrease,
    counterDecrease,
    addCounter,
    removeCounter,
  }, dispatch),
});

// connect App with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);
