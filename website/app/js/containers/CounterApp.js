import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  counterIncrease,
  counterDecrease,
  addCounter,
  removeCounter,
  getInitialApi,
} from 'actions/actions';
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
        <Link to="/about"><span className="link">關於我</span></Link>
      </div>
      );
  }
}

/**
 * 將 redux 的 state(store.getState()) filter 出 App 需要的部份並用 props 傳給 App
 * 因此在 APP 可用 this.props.state 取得 store.getState().state
 * @param  {object} state store.getState()
 * @return {object}       props
 */
const mapStateToProps = (state) => ({
  counter: state.counter,
  api: state.api,
});

/**
 * 將 action creator 加上 dispatch，一樣用 props 的方式傳給 App
 * 因此在 APP 可用 this.props.actions.counterIncrease 取得 dispatch(ActionsCreators.counterIncrease(...))
 * @param  {object} dispatch function dispatch(...)
 * @return {object}          props
 */
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    counterIncrease,
    counterDecrease,
    addCounter,
    removeCounter,
    getInitialApi,
  }, dispatch),
});

// connect App with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);
