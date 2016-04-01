import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChangeNumBtns from 'components/ChangeNumBtns';
import Monitor from 'components/Monitor';
import { increaseNum, decreaseNum } from 'actions/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { actions, state } = this.props;

    return (
        <div className="main-wrap">
          <Monitor state={ state }/>
          <ChangeNumBtns actions={ actions }/>
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
const mapStateToProps = (state) => {
  return { state };
};

/**
 * 將 action creator 加上 dispatch，一樣用 props 的方式傳給 App
 * 因此在 APP 可用 this.props.actions.increaseNum 取得 dispatch(ActionsCreators.increaseNum(...))
 * @param  {object} dispatch function dispatch(...)
 * @return {object}          props
 */
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      increaseNum: increaseNum,
      decreaseNum: decreaseNum
    }, dispatch)
  };
};

// connect App with redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
